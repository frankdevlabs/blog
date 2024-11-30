/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { format, parseISO, isFuture } = require("date-fns");
const { nl } = require("date-fns/locale/nl");

/*
  The createResolvers API allows us to extend the GraphQL schema and
  add our own custom fields to the types within the schema.
  This is useful for adding fields to types that are defined in third-party
  plugins or schemas.

  The createResolvers API is called once during the bootstrap phase.
  This means that it is called only after all schemas have been created.
  This also means that it is called only once per bootstrapping phase.

  The createResolvers API is called with an object containing the following
  properties: createResolvers, createTypes, createFieldExtension, and
  createNodeHelpers. We are only interested in the createResolvers property.
  The createResolvers property is a function that accepts an object containing
  the names of the types that we want to extend. The value of each property
  is a function that accepts an object containing the names of the fields
  that we want to extend. The value of each property is a function that
  accepts an object containing the names of the fields that we want to extend
  and the resolver function for each field.

  We are going to extend the SanityPost type and add a new field called datedSlug.
  The datedSlug field will be a string that contains (1) '/blog', (2) the date segment
  of the post's publishedAt field, (3) and the slug of the post.
  The datedSlug field will be used to create the path for each blog postpage.

  We are also going to extend the SanityPost type and add a new field called dateCaption.
  The dateCaption field will be a string that contains the date segment of the post's
  publishedAt field. The dateCaption will be structured as follows: 'd MMMM yyyy'.
 */
exports.createResolvers = async ({ createResolvers }) => {
  createResolvers({
    SanityPost: {
      datedSlug: {
        type: "String",
        resolve(source) {
          const dateSegment = format(parseISO(source.publishedAt), "yyyy/MM", { locale: nl });
          return `/blog/${dateSegment}/${source.slug.current}/`;
        },
      },
      dateString: {
        type: "String",
        resolve(source) {
          return format(parseISO(source.publishedAt), "d MMMM yyyy", { locale: nl });
        },
      },
    },
  });
};

async function createBlogPostPages(graphql, actions) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityPost(filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }) {
        edges {
          node {
            id
            publishedAt
            slug {
              current
            }
            externalUrl
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const postEdges = (result.data.allSanityPost || {}).edges || [];

  postEdges
    .filter((edge) => !isFuture(parseISO(edge.node.publishedAt)))
    .filter((edge) => !edge.node.externalUrl)
    .forEach((edge) => {
      const { id, slug = {}, publishedAt } = edge.node;
      const dateSegment = format(parseISO(publishedAt), "yyyy/MM");
      const path = `/blog/${dateSegment}/${slug.current}/`;

      createPage({
        path,
        component: require.resolve("./src/templates/blog-post.js"),
        context: { id },
        ownerNodeId: id,
      });
    });
}

exports.createPages = async ({ graphql, actions }) => {
  await createBlogPostPages(graphql, actions);

  const { createRedirect } = actions;
  createRedirect({
    fromPath: `http://www.${process.env.GATSBY_DOMAIN_NAME}/*`,
    toPath: `https://${process.env.GATSBY_DOMAIN_NAME}/:splat`,
    isPermanent: true,
    force: true,
  });
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  const typeDefs = `
    type SanityPost implements Node {
      externalUrl: String
    }
  `;

  createTypes(typeDefs);
};
