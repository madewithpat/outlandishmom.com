// import React from 'react';

// export default ({ data }) => {
//   console.log(data);
//   //   const { markdownRemark: post } = data;
//   return (
//     // <div>
//     //   <h1>{post.frontmatter.title}</h1>
//     //   <div dangerouslySetInnerHTML={{ __html: post.html }} />
//     // </div>
//     <h1>Testing!</h1>
//   );
// };

// const query = graphql`
//   query BlogPostQuery($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       html
//       frontmatter {
//         title
//       }
//     }
//   }
// `;

import React from 'react';

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
