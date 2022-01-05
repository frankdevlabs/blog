import React, { useContext, useEffect } from "react"; // eslint-disable-line no-unused-vars
import { format, parseISO } from "date-fns";
import nl from "date-fns/locale/nl";
import PortableText from "./portable-text";
import { GatsbyImage } from "gatsby-plugin-image";
import Prism from "prismjs";
import SocialShare from "./share";
import ReadMore from "./read-more";
import { getBlogUrl } from "../lib/helpers";
import mq from "../lib/media";
import { Link } from "gatsby";
import ThemeContext from "../theme/ThemeContext";
import { getTheme } from "../theme/theme";

const BlogPost = (props) => {
  useEffect(() => {
    // call the highlightAll() function to style our code blocks
    Prism.highlightAll();
  });
  const url = process.env.GATSBY_HOME_PAGE + getBlogUrl(props.publishedAt, props.slug.current);
  const { theme } = useContext(ThemeContext);
  const { borderColor } = getTheme(theme);
  return (
    <>
      <section>
        <article
          className="container"
          css={{
            marginTop: "10vh",
            [mq("sm")]: {
              marginTop: "5vh",
            },
          }}
        >
          <h1 className="heading-1">{props.title}</h1>
          <div className="caption" css={{ padding: "1rem 0" }}>
            {`${format(parseISO(props.publishedAt), "d MMMM yyyy", { locale: nl })}
            | ${props.readingTimeInMinutes}
            ${props.readingTimeInMinutes > 0 ? "minuten" : "minuut"} lezen
            |
        `}
            <SocialShare href={url} title={props.title}>
              Deel dit blog via
            </SocialShare>
          </div>
          <div className="snippit-xl" css={{ maxWidth: "863px" }}>
            <PortableText blocks={props._rawIntro} />
          </div>
          <div
            css={{
              height: "44.5rem",
              overflow: "hidden",
              borderRadius: "4px",
              position: "relative",
              marginTop: "1.6rem",
            }}
          >
            <GatsbyImage
              image={props.mainImage.asset.gatsbyImageData}
              css={{
                height: "100%",
                borderRadius: "4px",
              }}
              alt={props.mainImage.alt}
            />
          </div>
          <figcaption
            css={{
              fontSize: "1.4rem",
              fontStyle: "normal",
              fontWeight: "300",
              lineHeight: "2.2rem",
              letterSpacing: "0em",
              textAlign: "center",
            }}
          >
            {props.mainImage.caption}
          </figcaption>
          <div
            className="paragraph"
            css={{
              paddingTop: "5.6rem",
              marginLeft: "auto",
              marginRight: "auto",
              maxWidth: "688px",
              borderBottom: `1px solid ${borderColor}`,
              position: "relative",
            }}
          >
            {props._rawBody && <PortableText blocks={props._rawBody} />}
            <div
              css={{
                fontFamily: "Ubuntu, sans-serif",
                fontWeight: "300",
                fontSize: "1.4rem",
                lineHeight: "156.57%",
                letterSpacing: "0.02em",
                textAlign: "right",
                padding: "2.6rem 0 3.6rem 0",
              }}
            >
              <SocialShare href={url} title={props.title}>
                Deel dit blog via
              </SocialShare>
            </div>
          </div>
        </article>
      </section>
      <ReadMore>
        <p>
          Bekijk{" "}
          <Link className="anchor" to="/about/">
            mijn
          </Link>{" "}
          <Link className="anchor" to="/">
            andere blogs.
          </Link>
        </p>
      </ReadMore>
    </>
  );
};

export default BlogPost;
