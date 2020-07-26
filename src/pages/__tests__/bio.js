import React from 'react';
import renderer from 'react-test-renderer';
import { StaticQuery } from 'gatsby';
import BioPage from '../Bio';

// Needed because StaticQuery is used in Layout component
beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render }) =>
    render({
      site: {
        siteMetadata: {
          title: `Default Starter`,
        },
      },
    })
  );
});

describe('Bio', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<BioPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
