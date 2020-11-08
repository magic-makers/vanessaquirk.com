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
              Co-creator and co-host of a variety of podcasts, including City of the Future (exploring the ideas and innovations that will transform cities) and Uncertain Things (conversations to, hopefully, help us get us through this current moment).
            </p>
          </div>
          <div>
            <span className="fa fa-pencil fa-2x" />
            <br />
            <br />
            <p>
              I love researching and reporting on seemingly uninteresting subject matters — from rezoning laws, to recycling technology, to weather mitigation strategies — and crafting compelling stories that will, just maybe, inspire you to care.
            </p>
          </div>
          <div>
            <span className="fa fa-users fa-2x" />
            <br />
            <br />
            <p>
              Always happy to moderate or participate in panel discussions that dive deep into subject matters I’m passionate about, namely cities, architecture, technology, and podcasting.
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
          <a href="/articles" class="fill-row">See more articles</a>
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
