import React from "react"; // eslint-disable-line no-unused-vars
import { graphql } from "gatsby";
import { getBlogUrl, toPlainText } from "../lib/helpers";
import GraphQLErrorList from "../components/graphql-error-list";
import BlogPost from "../components/blog-post";
import Seo from "../components/seo";

export const query = graphql`
  query BlogPostTemplateQuery($id: String!) {
    post: sanityPost(id: { eq: $id }) {
      id
      readingTimeInMinutes
      publishedAt
      dateString
      datedSlug
      categories {
        _id
        title
      }
      mainImage {
        alt
        caption
      }
      title
      slug {
        current
      }
      _rawExcerpt(resolveReferences: { maxDepth: 5 })
      _rawBody(resolveReferences: { maxDepth: 8 })
      _rawIntro(resolveReferences: { maxDepth: 5 })
      mainImage {
        asset {
          gatsbyImageData(fit: FILLMAX, placeholder: DOMINANT_COLOR, width: 1200)
        }
      }
    }
  }
`;

const BlogPostTemplate = (props) => {
  const { data, errors } = props;
  const post = data && data.post;
  return (
    <>
      {errors && (
        <div>
          <GraphQLErrorList errors={errors} />
        </div>
      )}
      {post && <BlogPost {...post} />}
    </>
  );
};

export const Head = (props) => {
  const { data, errors } = props;
  const post = data && data.post;
  return (
    <>
      {errors && <Seo title="GraphQL Error" />}
      {post && (
        <Seo
          title={post.title || "Untitled"}
          description={toPlainText(post._rawExcerpt)}
          image={{
            url: post.mainImage.asset?.gatsbyImageData?.images?.fallback?.src,
            alt: post.mainImage.alt,
          }}
          type="article"
          path={post.datedSlug}
        />
      )}
    </>
  );
};

export default BlogPostTemplate;
