'use strict';

let client;

function getClient(options) {
  if (!client) {
    client = {
      RESP: DEFAULT_RESP,
      getSiteInfo: jest.fn(function(url, callback) {
        callback(null, this.RESP);
      }),
    };
  }
  return client;
}

module.exports = jest.fn(getClient);

const DEFAULT_RESP = {
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
    site_name: "The Lowdown on the Lowline, the World's First Underground Park",
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
