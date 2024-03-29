const http = require('http');
const HttpStatus = require('http-status-codes');
const fetch = require('node-fetch');

const opengraphClient = require('opengraph-io')({
  appId: 'b64092df-ae93-4da3-a4fa-d18480e07113',
});

const contentful = require('contentful-management').createClient({
  accessToken: 'CFPAT-yk9gQpPpaBt8izqjDnOzKe5qVFsmv5Z8kvTRbototj0',
});

let _contentfulClient;
async function getContentfulClient() {
  if (_contentfulClient === undefined) {
    const space = await contentful.getSpace('sruqohogh9hk');
    _contentfulClient = await space.getEnvironment('master');
  }
  return _contentfulClient;
}

/**
 * secret tokens so that we don't process input from randos
 * tokens were randomly generated by this command
 * python3 -c "import secrets; print(secrets.token_urlsafe())
 */
const SECRET_TOKENS = new Set([
  '6vJCmBxjFwz0iJJ09WzQSDTuFAml16bIA5fJsLq5Go4', // contentful webhook
]);

// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
exports.handler = async (event, context) => {
  try {
    if (!SECRET_TOKENS.has(event.headers.authorization)) {
      return Resp(HttpStatus.FORBIDDEN);
    }

    // const postBody = getMockContentfulPostBody();
    const postBody = JSON.parse(event.body);
    const articleUrl = postBody.fields.url['en-US'];

    // const siteInfo = getMockOpenGraphIoResp();
    const siteInfo = await getSiteInfo(articleUrl);

    const [htmlAsset, articleLink] = await Promise.allSettled([
      createAssetFromUrl(siteInfo.hybridGraph.title, articleUrl),
      saveArticleLink(siteInfo),
    ]);
    if (htmlAsset.status === 'rejected') {
      console.warn('Failed to save raw html as asset:', htmlAsset.reason);
    }
    if (articleLink.status === 'rejected') {
      throw Error(articleLink.reason);
    }
    return Resp(HttpStatus.OK, `Successfully processed url ${articleUrl}`);
  } catch (err) {
    console.error(err);
    return Resp(HttpStatus.INTERNAL_SERVER_ERROR, err.toString());
  }
};

function Resp(statusCode, body) {
  if (body == null) {
    body = http.STATUS_CODES[statusCode];
  }
  return { statusCode, body };
}

async function saveArticleLink(siteInfo) {
  const client = await getContentfulClient();
  const articleLinkContentType = await client.getContentType('articleLink');
  const articleLink = await client.createEntry(articleLinkContentType.sys.id, {
    fields: localifyFields({
      ...(await marshallFields(
        siteInfo.hybridGraph,
        articleLinkContentType.fields
      )),
      openGraphIoResponse: siteInfo,
    }),
  });
  return articleLink;
}

/**
 * Format fields from srcObj into format required by contenful fieldList
 * For now, this means creating asset Links and ensuring dates are of Date type
 */
async function marshallFields(srcObj, fieldList) {
  let destObj = {};
  for (const field of fieldList) {
    const key = field.id;
    let val = srcObj[key];
    if (val === undefined) {
      // field doesn't exist on object, skip ahead
      continue;
    }
    if (field.type === 'Link' && field.linkType === 'Asset') {
      val = assetLink(await createAssetFromUrl(srcObj.title + ' Image', val));
    } else if (field.type === 'Date') {
      val = new Date(val);
    }
    destObj[key] = val;
  }
  return destObj;
}

/**
 * replaces each field with an object like {'en-US': val}
 */
function localifyFields(srcObj, locale) {
  locale = locale || 'en-US';
  let destObj = {};
  for (const key of Object.keys(srcObj)) {
    newVal = {};
    newVal[locale] = srcObj[key];
    destObj[key] = newVal;
  }
  return destObj;
}

function assetLink(asset) {
  return {
    sys: {
      type: 'Link',
      linkType: 'Asset',
      id: asset.sys.id,
    },
  };
}

async function createAssetFromUrl(title, url) {
  const client = await getContentfulClient();
  const assetHeaders = (await fetch(url, { method: 'HEAD' })).headers;
  const asset = await client.createAsset({
    fields: localifyFields({
      title,
      file: {
        contentType: assetHeaders.get('content-type'),
        fileName: getFilenameFromUrl(url),
        upload: url,
      },
    }),
  });
  await asset.processForLocale('en-US');
  return asset;
}

function getFilenameFromUrl(url) {
  // remove trailing slash if there is one
  if (url.endsWith('/')) {
    url = url.slice(0, url.length - 1);
  }
  return url.slice(url.lastIndexOf('/') + 1);
}

function getSiteInfo(url) {
  return new Promise((resolve, reject) => {
    opengraphClient.getSiteInfo(url, function(err, siteInfo) {
      if (err) {
        reject(err);
      } else {
        resolve(siteInfo);
      }
    });
  });
}

// TODO: move this function into a proper test
function getMockOpenGraphIoResp() {
  return {
    hybridGraph: {
      title: "The Lowdown on the Lowline, the World's First Underground Park",
      description:
        'An MTA official walked up to the inconspicuous metal gate on the Essex St. subway platform one winter day in early 2009. Around him, people milled, waiting...',
      type: 'article',
      image:
        'https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvYXNzZXRzLzBjOWFjYjk0ZDZhN2VhYmRiMV8xNDczODcwMzU0MV84OWMzYzE1Y2U0X2suanBnIl0sWyJwIiwiY29udmVydCIsIiJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA4MSAtYXV0by1vcmllbnQiXSxbInAiLCJ0aHVtYiIsIjYwMHg-Il1d',
      url:
        'http://www.atlasobscura.com/articles/the-lowdown-on-the-lowline-the-worlds-first-underground-park',
      favicon: 'https://s3.amazonaws.com/atlas-dev/misc/icons/favicon.ico',
      site_name: 'Atlas Obscura',
      articlePublishedTime: '2015-10-22 08:00:00 -0400',
      articleModifiedTime: '2016-05-05 17:38:25 -0400',
    },
    openGraph: {
      title: "The Lowdown on the Lowline, the World's First Underground Park",
      description:
        'An MTA official walked up to the inconspicuous metal gate on the Essex St. subway platform one winter day in early 2009. Around him, people milled, waiting...',
      type: 'article',
      image: {
        url:
          'https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvYXNzZXRzLzBjOWFjYjk0ZDZhN2VhYmRiMV8xNDczODcwMzU0MV84OWMzYzE1Y2U0X2suanBnIl0sWyJwIiwiY29udmVydCIsIiJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA4MSAtYXV0by1vcmllbnQiXSxbInAiLCJ0aHVtYiIsIjYwMHg-Il1d',
      },
      url:
        'http://www.atlasobscura.com/articles/the-lowdown-on-the-lowline-the-worlds-first-underground-park',
      site_name: 'Atlas Obscura',
      articlePublishedTime: '2015-10-22 08:00:00 -0400',
      articleModifiedTime: '2016-05-05 17:38:25 -0400',
    },
    htmlInferred: {
      title:
        "The Lowdown on the Lowline, the World's First Underground Park - Atlas Obscuraaoc-full-screenaoc-heart-solidaoc-compassaoc-flipboardaoc-globeaoc-pocketaoc-shareaoc-cancelaoc-videoaoc-buildingaoc-clockaoc-clipboardaoc-helpaoc-arrow-rightaoc-arrow-leftaoc-ticketaoc-place-entryaoc-facebookaoc-instagramaoc-redditaoc-rssaoc-twitteraoc-accommodationaoc-activity-levelaoc-add-a-photoaoc-add-boxaoc-add-shapeaoc-arrow-forwardaoc-been-hereaoc-chat-bubblesaoc-closeaoc-expand-moreaoc-expand-lessaoc-forum-flagaoc-group-sizeaoc-heart-outlineaoc-heart-solidaoc-homeaoc-importantaoc-knife-forkaoc-library-booksaoc-linkaoc-list-circle-bulletsaoc-listaoc-location-addaoc-locationaoc-mailaoc-mapaoc-menuaoc-more-horizontalaoc-my-locationaoc-near-meaoc-notifications-alertaoc-notifications-mentionsaoc-notifications-mutedaoc-notifications-trackingaoc-open-in-newaoc-pencilaoc-personaoc-pinnedaoc-plane-takeoffaoc-planeaoc-printaoc-replyaoc-searchaoc-shuffleaoc-staraoc-subjectaoc-trip-styleaoc-unpinned",
      description:
        'An MTA official walked up to the inconspicuous metal gate on the Essex St. subway platform one winter day in early 2009. Around him, people milled, waiting...',
      type: 'site',
      image:
        'https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvYXNzZXRzLzBjOWFjYjk0ZDZhN2VhYmRiMV8xNDczODcwMzU0MV84OWMzYzE1Y2U0X2suanBnIl0sWyJwIiwiY29udmVydCIsIiJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA4MSAtYXV0by1vcmllbnQiXSxbInAiLCJ0aHVtYiIsIjYwMHg-Il1d',
      url:
        'https://www.atlasobscura.com/articles/the-lowdown-on-the-lowline-the-worlds-first-underground-park',
      favicon: 'https://s3.amazonaws.com/atlas-dev/misc/icons/favicon.ico',
      site_name:
        "The Lowdown on the Lowline, the World's First Underground Park",
      images: [
        'https://assets.atlasobscura.com/media/W1siZnUiLCJodHRwczovL2F0bGFzLWRldi5zMy5hbWF6b25hd3MuY29tL21pc2MvYXBwLWltYWdlcy9ib29rL3NlY29uZC1lZGl0aW9uLnBuZyJdLFsicCIsInRodW1iIiwiMjUweD4iXSxbInAiLCJjb252ZXJ0IiwiLXF1YWxpdHkgODEgLXN0cmlwIl1d/second-edition.png',
        'https://assets.atlasobscura.com/assets/blank-11b9c95a68e295dddd0ea924647536578ce285b2c8469a223c01df1ff3166af1.png',
        'https://assets.atlasobscura.com/media/W1siZnUiLCJodHRwczovL3MzLmFtYXpvbmF3cy5jb20vYXRsYXMtZGV2L21pc2Mvc3BvbnNvci1vbmUtb2Zmcy9kZWx0YV9sb2dvLnBuZyJdLFsicCIsInRodW1iIiwiMjYweD4iXSxbInAiLCJjb252ZXJ0IiwiLXF1YWxpdHkgODEgLXN0cmlwIl1d/delta_logo.png',
        'http://assets.atlasobscura.com/article_images/lg/19875/image.jpg',
        'https://images.atlasobscura.com/misc/app-images/samir_photo_for_membership_letter.jpg',
        'https://assets.atlasobscura.com/media/W1siZnUiLCJodHRwczovL3MzLmFtYXpvbmF3cy5jb20vYXRsYXMtZGV2L21pc2MvaW50ZXJuYWwtb25lLW9mZnMvc2hvcC9zZWNvbmQtZWRpdGlvbi1vcHRpbS5wbmciXSxbInAiLCJjb252ZXJ0IiwiLXF1YWxpdHkgODEgLXN0cmlwIl1d/second-edition-optim.png',
        'https://pixel.quantserve.com/pixel/p-wCQ2x-2BzmYPY.gif',
      ],
    },
    requestInfo: {
      redirects: 0,
      host:
        'https://www.atlasobscura.com/articles/the-lowdown-on-the-lowline-the-worlds-first-underground-park',
      responseCode: 200,
      cache_ok: true,
      max_cache_age: 432000000,
      accept_lang: 'en-US,en;q=0.9',
      url:
        'https://www.atlasobscura.com/articles/the-lowdown-on-the-lowline-the-worlds-first-underground-park',
      full_render: false,
      use_proxy: false,
      responseContentType: 'text/html; charset=utf-8',
    },
    accept_lang: 'en-US,en;q=0.9',
    is_cache: false,
    url:
      'https://www.atlasobscura.com/articles/the-lowdown-on-the-lowline-the-worlds-first-underground-park',
  };
}

// TODO: move this function into a proper test
function getMockContentfulPostBody() {
  return {
    sys: {
      type: 'Entry',
      id: 'SFixRHDbmnFgukjfQMsHs',
      space: { sys: { type: 'Link', linkType: 'Space', id: 'sruqohogh9hk' } },
      environment: {
        sys: { id: 'master', type: 'Link', linkType: 'Environment' },
      },
      contentType: {
        sys: { type: 'Link', linkType: 'ContentType', id: 'newLink' },
      },
      revision: 1,
      createdAt: '2020-06-20T17:36:06.230Z',
      updatedAt: '2020-06-20T17:36:06.230Z',
    },
    fields: {
      url: {
        'en-US':
          'https://www.atlasobscura.com/articles/the-lowdown-on-the-lowline-the-worlds-first-underground-park',
      },
    },
  };
}
