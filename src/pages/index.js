import React from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

const IndexPage = ({ data }) => (
  <Layout>
    <div id="main">
      <div className="inner">
        <header>
          <h1>
            This is Phantom, a free, fully responsive gatsby starter
            <br />
          </h1>
          <p>
            Etiam quis viverra lorem, in semper lorem. Sed nisl arcu euismod sit
            amet nisi euismod sed cursus arcu elementum ipsum arcu vivamus quis
            venenatis orci lorem ipsum et magna feugiat veroeros aliquam. Lorem
            ipsum dolor sit amet nullam dolore.
          </p>
        </header>
        <section className="tiles">
          {data.allContentfulArticleLink.edges.map((post, idx) => {
            const article = post.node;
            const rotatedStyleClass = 'style' + ((idx % 6) + 1);
            return (
              <article key={article.id} className={rotatedStyleClass}>
                <span className="image">
                  <Img alt="" sizes={article.image.sizes} />
                </span>
                <a target="_blank" rel="noopener noreferrer" href={article.url}>
                  <h2>{article.title}</h2>
                  <div className="content">
                    <p>{article.description.description}</p>
                    <small>{article.articlePublishedTime}</small>
                  </div>
                </a>
              </article>
            );
          })}
        </section>
      </div>
    </div>
  </Layout>
);

export default IndexPage;

export const query = graphql`
  query BlogIndexQuery {
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
