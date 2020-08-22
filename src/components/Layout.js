import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import '../assets/sass/main.scss';
import Footer from './Footer';
import Sidebar from './Sidebar';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPreloaded: true,
    };
  }

  attachScriptTag({ src, innerHTML, async = true }) {
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = async;
    if (src) {
      s.src = src;
    }
    if (innerHTML) {
      s.innerHTML = innerHTML;
    }
    document.body.appendChild(s);
  }

  showBrowserUpdateBannerIfNeeded() {
    this.attachScriptTag({
      innerHTML: `
        var $buoop = {
          required: { e: -4, f: -3, o: -3, s: -1, c: -3 },
          insecure: true,
          api: 2020.08,
        };`,
      async: false,
    });
    this.attachScriptTag({ src: '//browser-update.org/update.min.js' });
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ isPreloaded: false });
    }, 100);
    this.showBrowserUpdateBannerIfNeeded();
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
