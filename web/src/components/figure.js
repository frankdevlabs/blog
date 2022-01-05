import React from "react"; // eslint-disable-line no-unused-vars
import { GatsbyImage } from "gatsby-plugin-image";
import { getGatsbyImageData } from "gatsby-source-sanity";
import clientConfig from "../../client-config";

const Figure = ({ node }) => {
  if (!node || !node.asset || !node.asset._id) {
    return null;
  }
  const fluidProps = getGatsbyImageData(node.asset._id, { maxWidth: 675 }, clientConfig.sanity);
  return (
    <figure
      css={{
        margin: "3.7rem 0",
      }}
    >
      <GatsbyImage image={fluidProps} alt={node.alt} />
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
        {node.caption}
      </figcaption>
    </figure>
  );
};

export default Figure;
