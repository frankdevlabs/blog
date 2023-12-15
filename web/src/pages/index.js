import React from "react"; // eslint-disable-line no-unused-vars
import { graphql } from "gatsby";
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture,
} from "../lib/helpers";
import GraphQLErrorList from "../components/graphql-error-list";
import Seo from "../components/seo";
import BlogPostPreviewList from "../components/blog-post-preview-list";

export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
    posts: allSanityPost(
      sort: { publishedAt: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
      edges {
        node {
          id
          publishedAt
          mainImage {
            caption
            alt
            asset {
              _id
            }
          }
          readingTimeInMinutes
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`;

const IndexPage = (props) => {
  const { data, errors } = props;

  if (errors) {
    return (
      <>
        <GraphQLErrorList errors={errors} />
      </>
    );
  }

  const postNodes = (data || {}).posts
    ? mapEdgesToNodes(data.posts)
        .filter(filterOutDocsWithoutSlugs)
        .filter(filterOutDocsPublishedInTheFuture)
    : [];

  return (
    <>
      <section
        className="hero-section"
        css={{
          paddingBottom: "12vh",
          // Using the mq function will cause a hydration mismatch error, because
          // the function is not available on the server. The solution is to
          // use the media query directly, like this:
          "@media (max-width: 500px)": {
            paddingBottom: "5vh",
          },
        }}
      >
        <div
          className="container"
          css={{
            paddingTop: "10vh",
            // Same here, use the media query directly:
            "@media (max-width: 500px)": {
              paddingTop: "5vh",
            },
          }}
        >
          <h1 className="title">Frank’s Blog</h1>
          <h2 className="sub-title">Hier schrijf ik over legal en tech.</h2>
        </div>
      </section>
      <section>
        <div className="container">
          {postNodes && (
            <BlogPostPreviewList
              title="Latest blog posts"
              nodes={postNodes}
              browseMoreHref="/archive/"
            />
          )}
        </div>
      </section>
    </>
  );
};

export const Head = (props) => {
  const { data, errors } = props;

  if (errors) {
    return (
      <>
        <GraphQLErrorList errors={errors} />
      </>
    );
  }

  const site = (data || {}).site;

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.',
    );
  }
  return (
    <Seo
      title={site.title}
      description={site.description}
      keywords={site.keywords}
      contentType="website"
      path="/"
    />
  );
};

export default IndexPage;
