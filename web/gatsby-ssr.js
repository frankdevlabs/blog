import React, { createElement } from "react"; // eslint-disable-line no-unused-vars
import App from "./src/components/app";

const applyDarkModeClass = `
  (function () {
    var mql = window.matchMedia('(prefers-color-scheme: dark)')
    var prefersDarkFromMQ = mql.matches
    var persistedPreference = localStorage.getItem('theme')
    var hasUsedToggle = typeof persistedPreference === 'string' && persistedPreference !== 'auto'

    try {
      if ((hasUsedToggle && persistedPreference === 'dark') || prefersDarkFromMQ) {
        document.body.classList.add('dark')
      }
    } catch (e) {}
  })()
`;

const gtmLoadScript = `
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      '${process.env.GATSBY_TAG_CONTAINER_URL}/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','${process.env.GATSBY_GTM_ID}');
`;

export const onRenderBody = ({ setPreBodyComponents, setHeadComponents, setHtmlAttributes }) => {
  const darkmodeScript = createElement("script", {
    key: "darkmode",
    dangerouslySetInnerHTML: {
      __html: applyDarkModeClass,
    },
  });
  const gtmHeadScript = createElement("script", {
    key: "gtm-head",
    dangerouslySetInnerHTML: {
      __html: gtmLoadScript,
    },
  });
  const gtmBodyScript = (
    <noscript key="gtm-body">
      <iframe
        title="gtm-body-iframe"
        src={`${process.env.GATSBY_TAG_CONTAINER_URL}/ns.html?id=${process.env.GATSBY_GTM_ID}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      ></iframe>
    </noscript>
  );

  setHeadComponents([gtmHeadScript]);
  setPreBodyComponents([darkmodeScript, gtmBodyScript]);
  setHtmlAttributes({ prefix: "og: http://ogp.me/ns#", lang: "nl" });
};

export const wrapRootElement = ({ element }) => {
  return <App>{element}</App>;
};
