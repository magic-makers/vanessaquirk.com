import React from 'react';
import renderer from 'react-test-renderer';
import Footer from '../Footer';

jest.mock('../../../config', () => ({
  socialLinks: [
    {
      icon: 'icon-1',
      name: 'Link 1',
      url: 'https://foo.com',
    },
    {
      icon: 'icon-2',
      name: 'Link 2',
      url: 'https://bar.com',
    },
  ],
}));

describe('Footer', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Footer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
