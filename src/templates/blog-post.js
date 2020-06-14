import React from 'react';
import Img from 'gatsby-image';

import Layout from '../components/Layout';

const IndexPage = ({ data }) => {
  const post = data.contentfulBlogPost;
  return (
    <Layout>
      <div id="main">
        <div className="inner">
          <h1>{post.title}</h1>
          <span className="image main">
            <Img alt={post.title} sizes={post.heroImage.sizes} />
          </span>
          <p style={{ display: 'block' }}>{post.publishDate}</p>
          <div
            dangerouslySetInnerHTML={{
              __html: post.body.childMarkdownRemark.html,
            }}
          />
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        sizes(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulSizes_withWebp
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
