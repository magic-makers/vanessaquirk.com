import React from 'react';
import ArticleCard from '../components/ArticleCard';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';

const IndexPage = ({ data }) => (
  <Layout>
    <div id="main">
      <div className="inner">
        <header>
          <h1>Vanessa M. Quirk</h1>
        </header>
        <section className="grid home">
          <div>
            <span className="fa fa-microphone fa-2x" />
            <br />
            <br />
            <p>
              Etiam quis viverra lorem, in semper lorem. Sed nisl arcu euismod
              sit amet nisi euismod sed cursus arcu elementum ipsum arcu vivamus
              quis venenatis orci lorem ipsum et magna feugiat veroeros aliquam.
              Lorem ipsum dolor sit amet nullam dolore.
            </p>
          </div>
          <div>
            <span className="fa fa-pencil fa-2x" />
            <br />
            <br />
            <p>
              Etiam quis viverra lorem, in semper lorem. Sed nisl arcu euismod
              sit amet nisi euismod sed cursus arcu elementum ipsum arcu vivamus
              quis venenatis orci lorem ipsum et magna feugiat veroeros aliquam.
              Lorem ipsum dolor sit amet nullam dolore.
            </p>
          </div>
          <div>
            <span className="fa fa-users fa-2x" />
            <br />
            <br />
            <p>
              Etiam quis viverra lorem, in semper lorem. Sed nisl arcu euismod
              sit amet nisi euismod sed cursus arcu elementum ipsum arcu vivamus
              quis venenatis orci lorem ipsum et magna feugiat veroeros aliquam.
              Lorem ipsum dolor sit amet nullam dolore.
            </p>
          </div>
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
      limit: 3
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
