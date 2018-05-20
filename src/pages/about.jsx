import React from 'react';

const AboutPage = ({ data }) => (
  <div>
    <h1>About {data.site.siteMetadata.title}</h1>
    <p>Just a demo site for now</p>
  </div>
);

export default AboutPage;

export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
