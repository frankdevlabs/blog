import React from "react"; // eslint-disable-line no-unused-vars
import { useStaticQuery, graphql } from "gatsby";

const Seo = ({ title, description, path, children, image, contentType = "website", keywords }) => {
  const data = useStaticQuery(graphql`
    query defaultSEOQuery {
      defaultSeo: sanitySiteSettings(_id: { eq: "siteSettings" }) {
        title
        description
        keywords
        author {
          name
          twitter
        }
      }
      image: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          gatsbyImageData(width: 512, placeholder: TRACED_SVG, layout: CONSTRAINED)
        }
      }
    }
  `);

  const seo = {
    title: title === data.defaultSeo?.title ? title : `${title} | ${data.defaultSeo?.title || ""}`,
    description: description || data.defaultSeo?.description,
    image:
      image?.url ||
      process.env.GATSBY_HOME_PAGE +
        data.image.childImageSharp?.gatsbyImageData?.images?.fallback?.src,
    imageAlt: image?.alt || "Franksblog.nl logo",
    url: process.env.GATSBY_HOME_PAGE + path,
    fonts: "/fonts.css",
    creator: data.defaultSeo?.author.twitter || "",
    type: contentType,
    locale: "nl_NL",
    keywords: keywords || data.defaultSeo?.keywords,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="keywords" content={seo.keywords.join(", ")} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:type" content={seo.type} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:locale" content={seo.locale} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:image:alt" content={seo.imageAlt} />
      <meta name="twitter:creator" content={seo.creator} />
      <link rel="canonical" href={seo.url} />
      {children}
    </>
  );
};

export default Seo;
