import React from 'react';

import Layout from '../components/Layout';
import pic1 from '../assets/images/headshot.jpg';

const BioPage = () => (
  <Layout>
    <div id="main">
      <header>
        <h1>About Me</h1>
      </header>
      <div className="inner">
        <span className="image left">
          <img src={pic1} alt="" />
        </span>
        <p>
          Hi! I’m Vanessa M. Quirk, a podcaster and editor who spends much of my
          days writing and speaking about cities’ past, present, and future.
        </p>
        <p>
          You may have heard me as the co-host on a few podcasts:{' '}
         <a href="https://urbanistmedia.org/about-the-podcast/">Urban Roots</a>, where historic preservationist Deqah
          Hussein-Wetzel and I preserve the stories of places significant to 
          people of color in story; {' '}
          <a href="https://uncertain.substack.com/">Uncertain Things</a>, where
          my journalist roommate Adaam James Levin-Areddy and I talk to the
          thinkers who are navigating us through this current, chaotic moment;
        <a href="https://sidewalklabs.com/podcast/">City of the Future</a>,
          where fellow cities journalist{' '}
          <a href="http://www.eric-jaffe.com/home">Eric Jaffe</a> and I explored
          the ideas and innovations that will transform cities; and the{' '}
          <a href="https://sidewalklabs.com/podcast/">Sidewalk Weekly</a>, where
          Eric and I covered the week’s top stories in urban tech.
        </p>
        <p>
          Born in Spain to a Northern Irish father and a Peruvian mother, I
          begrudgingly grew up on Long Island, pursued English literature and
          Music at the George Washington University in Washington D.C. and
          Oxford University in the U.K., left the northern hemisphere to volunteer
          teach English in Chile, and then moved back to New York in 2014 to pursue an
          M.S. in Arts & Culture Journalism from Columbia University. I
          currently call Queens home. And when I’m not making podcasts, I’m
          probably{' '}
          <a href="https://open.spotify.com/artist/6OnAWkxQOpWTzuootGcVSX">
            making music
          </a>
          , failing to learn the ukulele, or squealing over adorable animals on
          Instagram.
        </p>
      </div>
    </div>
  </Layout>
);

export default BioPage;
