const { isFuture, format, parseISO } = require("date-fns");
const { nl } = require("date-fns/locale/nl");

module.exports.mapEdgesToNodes = function (data) {
  if (!data.edges) return [];
  return data.edges.map((edge) => edge.node);
};

module.exports.filterOutDocsWithoutSlugs = function ({ slug }) {
  return (slug || {}).current;
};

module.exports.filterOutDocsPublishedInTheFuture = function ({ publishedAt }) {
  return !isFuture(parseISO(publishedAt));
};

module.exports.toPlainText = function (blocks) {
  if (!blocks) {
    return "";
  }
  return blocks
    .map((block) => {
      if (block._type !== "block" || !block.children) {
        return "";
      }
      return block.children.map((child) => child.text).join("");
    })
    .join("\n\n");
};

module.exports.getBlogUrl = function (publishedAt, slug) {
  return `/blog/${format(parseISO(publishedAt), "yyyy/MM", { locale: nl })}/${
    slug.current || slug
  }/`;
};
