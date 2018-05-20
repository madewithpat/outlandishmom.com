import React from 'react';

import Link from 'gatsby-link';

const IndexPage = ({ data }) => {
  console.log(data);

  return (
    <div>
      <h1 style={{ display: 'inline-block', borderBottom: '1px solid' }}>
        There's some stuff on this page.
      </h1>
      <h4>We gots {data.allMarkdownRemark.totalCount} Posts</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link
            to={node.fields.slug}
            css={{ textDecoration: 'none', color: 'inherit' }}
          >
            <h3 style={{ marginBottom: '.25rem' }}>
              {node.frontmatter.title}{' '}
              <span style={{ color: '#BBB' }}>- {node.frontmatter.date}</span>
            </h3>
            <p>{node.excerpt}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};
export default IndexPage;

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`;
