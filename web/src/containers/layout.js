import React, { useState } from "react"; // eslint-disable-line no-unused-vars
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import GlobalStyles from "../theme/globalStyles";

const query = graphql`
  query SiteTitleQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
    }
  }
`;

function LayoutContainer(props) {
  const [showNav, setShowNav] = useState(false);
  function handleShowNav() {
    setShowNav(true);
  }
  function handleHideNav() {
    setShowNav(false);
  }

  const data = useStaticQuery(query);
  if (!data.site) {
    throw new Error(
      'Missing "Site settings". Open the Studio at http://localhost:3333 and some content in "Site settings"',
    );
  }
  return (
    <>
      <GlobalStyles />
      <Layout
        {...props}
        showNav={showNav}
        siteTitle={data.site.title}
        onHideNav={handleHideNav}
        onShowNav={handleShowNav}
      />
    </>
  );
}

export default LayoutContainer;
