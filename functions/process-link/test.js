import pl from './process-link';

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
