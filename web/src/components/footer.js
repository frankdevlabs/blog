import React from "react"; // eslint-disable-line no-unused-vars
import { Link } from "gatsby";
import RSSFeedIcon from "./icons/rss-feed.svg";
import mq from "../theme/media-queries";

const Footer = () => {
  return (
    <footer
      css={{
        padding: `125px var(--padding-outer-default) 0 var(--padding-outer-default)`,
        [mq("lg")]: {
          padding: `125px var(--padding-outer-xl) 0 var(--padding-outer-xl)`,
        },
        [mq("md")]: {
          padding: `60px var(--padding-outer-md) 0 var(--padding-outer-md) `,
        },
        [mq("sm")]: {
          padding: `35px var(--padding-outer-sm)  0 var(--padding-outer-sm) `,
        },
      }}
    >
      <div
        className="container"
        css={{
          borderTop: `1px solid var(--color-border)`,
        }}
      >
        <div
          className="flexbox"
          css={{
            height: "8.5rem",
            justifyContent: "space-between",
            [mq("sm")]: {
              justifyContent: "space-around",
              flexDirection: "column-reverse",
            },
          }}
        >
          <span
            css={{
              fontWeight: "300",
              fontSize: "1.4rem",
              lineHeight: "156.57%",
              letterSpacing: "0.02em",
              [mq("sm")]: {
                fontSize: "1rem",
              },
            }}
          >
            © 2021 Frank de Vries. Alle rechten voorbehouden
          </span>
          <div
            css={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Link
              className="anchor"
              css={{
                fontWeight: "300",
                fontSize: "1.4rem",
                lineHeight: "156.57%",
                letterSpacing: "0.02em",
              }}
              to="/privacy/"
            >
              Privacy
            </Link>
            <div css={{ "&::before": { content: '"|"', margin: "0 2rem" } }} />
            <a
              css={{
                fontWeight: "300",
                fontSize: "1.4rem",
                lineHeight: "156.57%",
                letterSpacing: "0.02em",
                cursor: "pointer",
                position: "relative",
                "&::before": {
                  display: "inline-block",
                  width: "15px",
                  content: '""',
                },
              }}
              className="anchor"
              href="/feeds/rss.xml"
            >
              <RSSFeedIcon
                css={{
                  position: "absolute",
                  left: "0",
                }}
              />
              RSS Feed
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
