import pl from './process-link';
import opengraph from 'opengraph-io';

describe('getFilenameFromUrl', () => {
  const getFilenameFromUrl = pl.__get__('getFilenameFromUrl');
  it('gets last part', () => {
    expect(getFilenameFromUrl('https://site.com/foobar.jpg')).toEqual(
      'foobar.jpg'
    );
  });
  it('strips trailing slash', () => {
    expect(getFilenameFromUrl('https://site.com/foobar/')).toEqual('foobar');
  });
});

describe('opengraph', () => {
  const getSiteInfo = pl.__get__('getSiteInfo');

  it('is passed API token', () => {
    expect(opengraph).toHaveBeenCalledWith({
      appId: 'b64092df-ae93-4da3-a4fa-d18480e07113',
    });
  });

  it('is called by getSiteInfo', async () => {
    const mock = opengraph();
    expect(await getSiteInfo('https://site.com')).toEqual(mock.RESP);
    expect(mock.getSiteInfo).toHaveBeenCalledTimes(1);
    expect(mock.getSiteInfo).toHaveBeenCalledWith(
      'https://site.com',
      expect.anything()
    );
  });
});
