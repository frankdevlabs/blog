import React, { useContext } from "react"; // eslint-disable-line no-unused-vars
import Seo from "../components/seo";
import Layout from "../containers/layout";
import { graphql, Link } from "gatsby";
import PortableText from "../components/portable-text";
import { toPlainText } from "../lib/helpers";
import mq from "../lib/media";
import ReadMore from "../components/read-more";
import ThemeContext from "../theme/ThemeContext";
import { getTheme } from "../theme/theme";

export const query = graphql`
  query PrivacyPageQuery {
    sanityPage(slug: { current: { eq: "privacy" } }) {
      id
      title
      _rawExcerpt(resolveReferences: { maxDepth: 5 })
      _rawBody(resolveReferences: { maxDepth: 5 })
      slug {
        current
      }
      mainImage {
        asset {
          gatsbyImageData(fit: FILLMAX, placeholder: DOMINANT_COLOR)
        }
      }
    }
  }
`;

const PrivacyPage = (props) => {
  const { theme } = useContext(ThemeContext);
  const { borderColor } = getTheme(theme);
  return (
    <Layout>
      <section className="privacy-section">
        <div
          className="container"
          css={{
            marginTop: "10vh",
            [mq("sm")]: {
              marginTop: "5vh",
            },
          }}
        >
          <h1 className="heading-1">{props.data.sanityPage.title}</h1>
          <div
            className="snippit-xl"
            css={{
              maxWidth: "863px",
              paddingTop: "1.2rem",
            }}
          >
            {props.data.sanityPage._rawExcerpt && (
              <PortableText blocks={props.data.sanityPage._rawExcerpt} />
            )}
          </div>
          <div
            className="paragraph"
            css={{
              padding: "5.6rem 0",
              marginLeft: "auto",
              marginRight: "auto",
              maxWidth: "688px",
              borderBottom: `1px solid ${borderColor}`,
            }}
          >
            {props.data.sanityPage._rawExcerpt && (
              <PortableText blocks={props.data.sanityPage._rawBody} />
            )}
          </div>
        </div>
      </section>
      <ReadMore>
        <p>
          Terug naar de{" "}
          <Link className="anchor" to="/">
            homepage.
          </Link>
        </p>
      </ReadMore>
    </Layout>
  );
};

export const Head = (props) => (
  <Seo
    title={props.data.sanityPage.title}
    description={toPlainText(props.data.sanityPage._rawExcerpt)}
    type="website"
    path={"/" + props.data.sanityPage.slug.current + "/"}
    image={props.data.sanityPage.mainImage}
  />
);

export default PrivacyPage;
