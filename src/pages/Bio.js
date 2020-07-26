import React from 'react';

import Layout from '../components/Layout';
import pic1 from '../assets/images/01.jpg';

{
  /* <span className="image">
<Img alt="" sizes={article.image.sizes} />
</span> */
}

const BioPage = () => (
  <Layout>
    <div id="main">
      <div className="inner">
        <h1>Bio</h1>
        <p>
          <span className="image left">
            <img src={pic1} alt="" />
          </span>
          Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis
          sagittis eget. tempus euismod. Vestibulum ante ipsum primis in
          faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac
          adipiscing accumsan eu faucibus. Integer ac pellentesque praesent
          tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum
          primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis
          volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque
          praesent. Donec accumsan interdum nisi, quis tincidunt felis sagittis
          eget. tempus euismod. Vestibulum ante ipsum primis in faucibus
          vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing
          accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis
          sagittis eget. tempus euismod. Vestibulum ante ipsum primis in
          faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac
          adipiscing accumsan eu faucibus. Integer ac pellentesque praesent.
          Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu
          faucibus. Integer ac pellentesque praesent tincidunt felis sagittis
          eget. tempus euismod. Vestibulum ante ipsum primis in faucibus
          vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing
          accumsan eu faucibus. Integer ac pellentesque praesent.
        </p>
        <p>
          <span className="image right">
            <img src={'images/pic15.jpg'} alt="" />
          </span>
          Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis
          sagittis eget. tempus euismod. Vestibulum ante ipsum primis in
          faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac
          adipiscing accumsan eu faucibus. Integer ac pellentesque praesent
          tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum
          primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis
          volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque
          praesent. Donec accumsan interdum nisi, quis tincidunt felis sagittis
          eget. tempus euismod. Vestibulum ante ipsum primis in faucibus
          vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing
          accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis
          sagittis eget. tempus euismod. Vestibulum ante ipsum primis in
          faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac
          adipiscing accumsan eu faucibus. Integer ac pellentesque praesent.
          Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu
          faucibus. Integer ac pellentesque praesent tincidunt felis sagittis
          eget. tempus euismod. Vestibulum ante ipsum primis in faucibus
          vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing
          accumsan eu faucibus. Integer ac pellentesque praesent.
        </p>
      </div>
    </div>
  </Layout>
);

export default BioPage;
