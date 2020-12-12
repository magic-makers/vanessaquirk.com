import React from 'react';
import ArticleCard from '../components/ArticleCard';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';

const ArticlesPage = ({ data }) => (
  <Layout>
    <div id="main">
      <div className="inner">
        <br />
        <br />
        <section className="grid portfolio">
          {data.allContentfulArticleLink.edges.map((post, idx) => {
            const rotatedStyleClass = 'style' + ((idx % 6) + 1);
            return (
              <ArticleCard
                key={post.node.id}
                article={post.node}
                className={rotatedStyleClass}
              />
            );
          })}
        </section>
      </div>
    </div>
  </Layout>
);

export default ArticlesPage;

export const query = graphql`
  query ArticlesPageQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulArticleLink(
      sort: { fields: [articlePublishedTime], order: DESC }
    ) {
      edges {
        node {
          id
          title
          description {
            description
          }
          url
          articlePublishedTime(formatString: "MMMM Do, YYYY")
          image {
            sizes(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulSizes_withWebp
            }
          }
        }
      }
    }
  }
`;
