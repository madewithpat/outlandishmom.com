import React from "react";

export default ({ data }) => {
  const post = data.markdownRemark;

  return (
    <article className="pa3 pa5-ns">
      <h1 className="f3 f2-m f1-l">{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </article>
  );
};

export const query = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      html
    }
  }
`;
