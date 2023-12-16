import React from "react"; // eslint-disable-line no-unused-vars
import { Link } from "gatsby";
import SanityImage from "gatsby-plugin-sanity-image";
import PortableText from "./portable-text";

const BlogPostPreviewList = (props) => {
  const { nodes } = props;
  return (
    <div className="flexbox grid">
      {nodes &&
        nodes.map((node) => {
          const dateCaption = `${node.dateString} | ${node.readingTimeInMinutes} min.`;
          return (
            <div
              key={node.id}
              className="col"
              css={{
                "a:hover .overflow": {
                  backgroundImage:
                    "linear-gradient(0deg, rgba(254, 251, 244, 0.31), rgba(254, 251, 244, 0.31))",
                },
              }}
            >
              <Link to={node.datedSlug}>
                <div
                  css={{
                    height: "24.5rem",
                    overflow: "hidden",
                    borderRadius: "4px",
                    position: "relative",
                  }}
                >
                  <div
                    className="overflow"
                    css={{
                      height: "100%",
                      width: "100%",
                      position: "absolute",
                      backgroundImage:
                        "linear-gradient(0deg, rgba(254, 251, 244, 0.51), rgba(254, 251, 244, 0.51))",
                      zIndex: "1",
                    }}
                  />
                  <SanityImage
                    {...node.mainImage}
                    width={300}
                    sizes="(min-width: 500px) 50vw, (min-width: 768px) 33.3vw, (min-width: 992px) 25vw, (min-width: 1280px) 267.5px, 100vw"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "4px",
                    }}
                  />
                </div>
                <h3 className="heading-3" css={{ marginTop: "6px" }}>
                  {node.title}
                </h3>
                <div className="caption" css={{ padding: "1px 0" }}>
                  {dateCaption}
                </div>
                <div className="snippit">
                  <PortableText blocks={node._rawExcerpt} />
                </div>
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export default BlogPostPreviewList;
