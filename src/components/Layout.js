import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import '../assets/sass/main.scss';
import Footer from './Footer';
import Sidebar from './Sidebar';

// This module relies on window which isn't defined during server side redering.
// We can skip this import during SSR because it's only used in componentDidMount
// which isn't called until hydration.
const browserUpdate =
  typeof window !== 'undefined' ? import('browser-update') : undefined;

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPreloaded: true,
    };
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ isPreloaded: false });
    }, 100);
    browserUpdate.then(module => {
      module.default({
        required: { e: -4, f: -3, o: -3, s: -1, c: -3 },
        insecure: true,
      });
    });
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  render() {
    const { children } = this.props;
    const { isPreloaded } = this.state;
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                { name: 'description', content: 'vanessaquirk.com' },
                { name: 'keywords', content: 'site, web' },
              ]}
            >
              <html lang="en" />
            </Helmet>
            <div className={isPreloaded ? 'main-body is-preload' : 'main-body'}>
              <div id="wrapper">
                <Sidebar />

                {children}
                <Footer />
              </div>
            </div>
          </>
        )}
      />
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
