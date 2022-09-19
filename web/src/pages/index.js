import React from "react"; // eslint-disable-line no-unused-vars
import { graphql } from "gatsby";
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture,
} from "../lib/helpers";
import GraphQLErrorList from "../components/graphql-error-list";
import Seo from "../components/seo";
import Layout from "../containers/layout";
import BlogPostPreviewList from "../components/blog-post-preview-list";
import mq from "../lib/media";

export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
    posts: allSanityPost(
      limit: 6
      sort: { fields: [publishedAt], order: DESC }
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
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const site = (data || {}).site;
  const postNodes = (data || {}).posts
    ? mapEdgesToNodes(data.posts)
        .filter(filterOutDocsWithoutSlugs)
        .filter(filterOutDocsPublishedInTheFuture)
    : [];

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }

  return (
    <Layout>
      <Seo
        title={site.title}
        description={site.description}
        keywords={site.keywords}
        type="website"
        path="/"
      />
      <section
        className="hero-section"
        css={{
          paddingBottom: "12vh",
          [mq("sm")]: {
            paddingBottom: "5vh",
          },
        }}
      >
        <div
          className="container"
          css={{
            paddingTop: "10vh",
            [mq("sm")]: {
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
    </Layout>
  );
};

export default IndexPage;
