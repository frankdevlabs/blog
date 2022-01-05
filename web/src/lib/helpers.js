const { isFuture, format } = require("date-fns");

module.exports.mapEdgesToNodes = function (data) {
  if (!data.edges) return [];
  return data.edges.map((edge) => edge.node);
};

module.exports.filterOutDocsWithoutSlugs = function ({ slug }) {
  return (slug || {}).current;
};

module.exports.filterOutDocsPublishedInTheFuture = function ({ publishedAt }) {
  return !isFuture(publishedAt);
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
  return `/blog/${format(publishedAt, "YYYY/MM")}/${slug.current || slug}/`;
};
