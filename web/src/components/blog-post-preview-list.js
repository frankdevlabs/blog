import React from "react"; // eslint-disable-line no-unused-vars
import { Link } from "gatsby";
import SanityImage from "gatsby-plugin-sanity-image";
import PortableText from "./portable-text";

const ExternalLinkIcon = () => (
  <>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      fill="currentColor"
      width="16"
      height="16"
      style={{
        marginLeft: "4px",
        display: "inline-block",
        verticalAlign: "middle",
      }}
    >
      <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z" />
    </svg>
  </>
);

const saEvent = (eventName) => {
  if (typeof window !== "undefined" && window.sa_event) {
    window.sa_event(eventName);
  }
};

const BlogPostPreviewList = (props) => {
  const { nodes } = props;
  return (
    <div className="flexbox grid">
      {nodes &&
        nodes.map((node, index) => {
          const dateCaption = `${node.dateString} | ${node.readingTimeInMinutes} min.`;
          const LinkComponent = node.externalUrl ? "a" : Link;
          const linkProps = node.externalUrl
            ? {
                href: `${node.externalUrl}${
                  node.externalUrl.includes("?") ? "&" : "?"
                }utm_source=franksblog.nl&utm_medium=affiliate&utm_campaign=franksblog`,
                target: "_blank",
                rel: "noopener noreferrer",
                onClick: () => saEvent(`clicked_external_link_${node.title}`),
              }
            : {
                to: node.datedSlug,
              };

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
              <LinkComponent {...linkProps}>
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
                  {node.externalUrl && (
                    <span
                      css={{
                        position: "absolute",
                        bottom: "12px",
                        right: "12px",
                        zIndex: "2",
                        backgroundColor: "var(--color-secondary)",
                        color: "var(--color-background)",
                        padding: "2px 6px",
                        borderRadius: "4px",
                        fontSize: "0.9em",
                      }}
                    >
                      extern artikel
                    </span>
                  )}
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
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </div>
                <h3 className="heading-3" css={{ marginTop: "6px" }}>
                  {node.title}
                  {node.externalUrl && (
                    <>
                      <ExternalLinkIcon />
                    </>
                  )}
                </h3>
                <div className="caption" css={{ padding: "1px 0" }}>
                  {dateCaption}
                </div>
                <div className="snippit">
                  <PortableText blocks={node._rawExcerpt} />
                </div>
              </LinkComponent>
            </div>
          );
        })}
    </div>
  );
};

export default BlogPostPreviewList;
