import React, { createElement } from "react"; // eslint-disable-line no-unused-vars
import Terser from "terser";
import Layout from "./src/containers/layout";
import { ThemeProviderWrapper } from "./src/theme/ThemeContext";
import {
  COLOR_MODE_KEY,
  COLORS,
  TRANSITION_TIMES,
  INITIAL_COLOR_MODE_CSS_PROP,
} from "./src/theme/constants";

function setColorsByTheme() {
  const colors = "🌈";
  const transitionTimes = "⌚️";
  const colorModeKey = "🔑";
  const colorModeCssProp = "⚡️";

  const mql = window.matchMedia("(prefers-color-scheme: dark)");
  const prefersDarkFromMQ = mql.matches;
  const persistedPreference = localStorage.getItem(colorModeKey);
  let isFirstLoad = true;

  window.addEventListener("load", () => {
    isFirstLoad = false;
  });

  let colorMode = "light";

  const hasUsedToggle = typeof persistedPreference === "string";

  if (hasUsedToggle) {
    colorMode = persistedPreference;
  } else {
    colorMode = prefersDarkFromMQ ? "dark" : "light";
  }

  let root = document.documentElement;

  root.style.setProperty(colorModeCssProp, colorMode);

  Object.entries(colors).forEach(([name, colorByTheme]) => {
    const cssVarName = `--color-${name}`;

    root.style.setProperty(cssVarName, colorByTheme[colorMode]);
  });

  Object.entries(transitionTimes).forEach(([name, transitionTimeByTheme]) => {
    const cssVarName = `--transition-time-${name}`;
    let transitionTime = isFirstLoad ? "0s" : transitionTimeByTheme[colorMode];
    root.style.setProperty(cssVarName, transitionTime);
  });
}

const DarkThemeScriptTag = () => {
  const boundFn = String(setColorsByTheme)
    .replace('"🌈"', JSON.stringify(COLORS))
    .replace('"⌚️"', JSON.stringify(TRANSITION_TIMES))
    .replace("🔑", COLOR_MODE_KEY)
    .replace("⚡️", INITIAL_COLOR_MODE_CSS_PROP);

  let calledFunction = `(${boundFn})()`;

  calledFunction = Terser.minify(calledFunction).code;

  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: calledFunction }} />;
};

/**
 * If the user has JS disabled, the injected script will never fire!
 * This means that they won't have any colors set, everything will be default
 * black and white.
 * We can solve for this by injecting a `<style>` tag into the head of the
 * document, which sets default values for all of our colors.
 * Only light mode will be available for users with JS disabled.
 */
const FallbackStyles = () => {
  // Create a string holding each CSS variable:
  /*
    `--color-text: black;
    --color-background: white;`
  */

  const cssVariableString = Object.entries(COLORS).reduce((acc, [name, colorByTheme]) => {
    return `${acc}\n--color-${name}: ${colorByTheme.light};`;
  }, "");

  const wrappedInSelector = `html { ${cssVariableString} }`;

  return <style>{wrappedInSelector}</style>;
};
const FILE_NAME = process.env.GATSBY_TAG_CONTAINER_FILE_NAME
  ? process.env.GATSBY_TAG_CONTAINER_FILE_NAME
  : "gtm.js";

const gtmLoadScript = `
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      '${process.env.GATSBY_TAG_CONTAINER_URL}/${FILE_NAME}?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','${process.env.GATSBY_GTM_ID}');
`;

export const onRenderBody = ({ setPreBodyComponents, setHeadComponents, setHtmlAttributes }) => {
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

  setHeadComponents([<FallbackStyles key="fallback-styles" />, gtmHeadScript]);
  setPreBodyComponents([<DarkThemeScriptTag key="darkmode" />, gtmBodyScript]);
  setHtmlAttributes({ prefix: "og: http://ogp.me/ns#", lang: "nl" });
};

// Wraps every page in a component
export const wrapPageElement = ({ element }) => {
  return <Layout>{element}</Layout>;
};
// Wraps the root element in a component
export const wrapRootElement = ThemeProviderWrapper;
