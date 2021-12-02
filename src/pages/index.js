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
              I'm the co-creator and co-host of City of the Future (exploring the  
              ideas that will transform cities), Uncertain Things (conversations  
              to get us through this moment), and Urban Roots (unexplored stories 
              of urban history).
            </p>
          </div>
          <div>
            <span className="fa fa-pencil fa-2x" />
            <br />
            <br />
            <p>
              I'm a thoughtful editor who loves working with others to find the
              right structure, turn of phrase, or headline. As a writer, I dig
              deep into research and reporting to craft compelling
              human-centered stories.
            </p>
          </div>
          <div>
            <span className="fa fa-users fa-2x" />
            <br />
            <br />
            <p>
              I'm a confident public speaker and am always happy to participate
              in or moderate panel discussions that dive into subject matters
              I’m passionate about, namely cities, responsible tech, and
              podcasting.
            </p>
          </div>
        </section>
        <hr />
        <h2 className="align-center">Recent work</h2>
        <br />
        <section className="grid home">
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
          <a href="/work" className="fill-row">
            See more
          </a>
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
          url
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
