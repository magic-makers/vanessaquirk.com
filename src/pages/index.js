import React from 'react';

import Layout from '../components/Layout';

import { Link } from 'gatsby';
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
          {data.allContentfulBlogPost.edges.map((post, idx) => {
            const article = post.node;
            const rotatedStyleClass = 'style' + ((idx % 6) + 1);
            return (
              <article className={rotatedStyleClass}>
                <span className="image">
                  <Img alt="" sizes={article.heroImage.sizes} />
                </span>
                <Link to={`/blog/${article.slug}`}>
                  <h2>{article.title}</h2>
                  <div className="content">
                    <p
                      dangerouslySetInnerHTML={{
                        __html: article.description.childMarkdownRemark.html,
                      }}
                    />
                    <small>{article.publishDate}</small>
                  </div>
                </Link>
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
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            sizes(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulSizes_withWebp
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`;
