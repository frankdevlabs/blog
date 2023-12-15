import React from "react"; // eslint-disable-line no-unused-vars
import { Global, css } from "@emotion/react";
import mq from "../theme/media-queries";

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        /* Usage of fonts:
          We are loading all fonts locally instead of the Google CDN as described here:
          https://www.gatsbyjs.com/blog/how-to-add-custom-fonts-to-gatsby

          Current fonts:
          - Ubuntu: 300,400,500,700 (http://google-webfonts-helper.herokuapp.comubuntu?subsets=latin)
          - Raleway:300,400,400i,700 (http://google-webfonts-helper.herokuapp.com/fonts/raleway?subsets=latin)

           Fonts are locally stored in the 'static/fonts' folder.
        */
        @font-face {
          font-family: "Ubuntu";
          font-style: normal;
          font-weight: 300;
          font-display: swap;
          src: url("/fonts/ubuntu-v20-latin-300.woff2") format("woff2"); /* Chrome 26+, Opera 23+, Firefox 39+ */
        }

        @font-face {
          font-family: "Ubuntu";
          font-style: normal;
          font-weight: 300;
          font-display: swap;
          src: url("/fonts/ubuntu-v20-latin-300.woff") format("woff"); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
        }

        /* ubuntu-regular - latin */
        @font-face {
          font-family: "Ubuntu";
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: url("/fonts/ubuntu-v20-latin-regular.woff2") format("woff2"); /* Chrome 26+, Opera 23+, Firefox 39+ */
        }

        @font-face {
          font-family: "Ubuntu";
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: url("/fonts/ubuntu-v20-latin-regular.woff") format("woff"); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
        }

        /* ubuntu-500 - latin */
        @font-face {
          font-family: "Ubuntu";
          font-style: normal;
          font-weight: 500;
          font-display: swap;
          src: url("/fonts/ubuntu-v20-latin-500.woff2") format("woff2"); /* Chrome 26+, Opera 23+, Firefox 39+ */
        }

        @font-face {
          font-family: "Ubuntu";
          font-style: normal;
          font-weight: 500;
          font-display: swap;
          src: url("/fonts/ubuntu-v20-latin-500.woff") format("woff"); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
        }

        /* ubuntu-700 - latin */
        @font-face {
          font-family: "Ubuntu";
          font-style: normal;
          font-weight: 700;
          font-display: swap;
          src: url("/fonts/ubuntu-v20-latin-700.woff2") format("woff2"); /* Chrome 26+, Opera 23+, Firefox 39+ */
        }

        @font-face {
          font-family: "Ubuntu";
          font-style: normal;
          font-weight: 700;
          font-display: swap;
          src: url("/fonts/ubuntu-v20-latin-700.woff") format("woff"); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
        }

        /* raleway-300 - latin */
        @font-face {
          font-family: "Raleway";
          font-style: normal;
          font-weight: 300;
          font-display: swap;
          src: url("/fonts/raleway-v28-latin-300.woff2") format("woff2"); /* Chrome 26+, Opera 23+, Firefox 39+ */
        }

        @font-face {
          font-family: "Raleway";
          font-style: normal;
          font-weight: 300;
          font-display: swap;
          src: url("/fonts/raleway-v28-latin-300.woff") format("woff"); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
        }

        /* raleway-regular - latin */
        @font-face {
          font-family: "Raleway";
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: url("/fonts/raleway-v28-latin-regular.woff2") format("woff2"); /* Chrome 26+, Opera 23+, Firefox 39+ */
        }

        @font-face {
          font-family: "Raleway";
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: url("/fonts/raleway-v28-latin-regular.woff") format("woff"); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
        }

        /* raleway-700 - latin */
        @font-face {
          font-family: "Raleway";
          font-style: normal;
          font-weight: 700;
          font-display: swap;
          src: url("/fonts/raleway-v28-latin-700.woff2") format("woff2"); /* Chrome 26+, Opera 23+, Firefox 39+ */
        }

        @font-face {
          font-family: "Raleway";
          font-style: normal;
          font-weight: 700;
          font-display: swap;
          src: url("/fonts/raleway-v28-latin-700.woff") format("woff"); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
        }

        /* raleway-italic - latin */
        @font-face {
          font-family: "Raleway";
          font-style: italic;
          font-weight: 400;
          font-display: swap;
          src: url("/fonts/raleway-v28-latin-italic.woff2") format("woff2"); /* Chrome 26+, Opera 23+, Firefox 39+ */
        }

        @font-face {
          font-family: "Raleway";
          font-style: italic;
          font-weight: 400;
          font-display: swap;
          src: url("/fonts/raleway-v28-latin-italic.woff") format("woff"); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
        }

        /*
            Global styles below:
         */

        :root {
          --transition-cubic-bezier: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
          --transition-ease-in-out: 0.2s ease-in-out;
          --padding-outer-default: 60px;
          --padding-outer-xl: 45px;
          --padding-outer-md: 20px;
          --padding-outer-sm: 2rem;
        }

        *,
        *::after,
        *::before {
          margin: 0;
          padding: 0;
          box-sizing: inherit;
        }
        html {
          scrollbar-color: var(--color-scrollbarColor);
          font-size: 62.5%;
          ${mq("md")} {
            font-size: 56.25%;
          }
          ${mq("sm")} {
            font-size: 52.5%;
          }
        }
        body {
          background: var(--color-background);
          color: var(--color-primary);
          transition-delay: var(--transition-time-background);
          box-sizing: border-box;
          font-family: "raleway", sans-serif;
          font-size: 1.8rem;
          line-height: 175.6%;
          letter-spacing: 0.01em;
          font-weight: 400;
          font-style: normal;
          text-rendering: optimizeLegibility;
        }
        select {
          outline: 0;
        }
        button,
        [type="button"],
        [type="reset"],
        [type="submit"] {
          -webkit-appearance: button;
          background: transparent;
          border: none;
          cursor: pointer;
        }
        section {
          padding: 35px var(--padding-outer-default);

          ${mq("lg")} {
            padding: 35px var(--padding-outer-xl);
          }

          ${mq("md")} {
            padding: 35px var(--padding-outer-md);
          }

          ${mq("sm")} {
            padding: 35px var(--padding-outer-sm);
          }
        }
        .container {
          max-width: 1160px;
          margin-right: auto;
          margin-left: auto;
        }
        .flexbox {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .flexbox.grid {
          justify-content: flex-start;
          flex-wrap: wrap;
          align-items: flex-start;
          margin: 0 -15px;
        }
        .flexbox.grid .col {
          margin-bottom: 30px;
          flex: 0 1 25%;
          padding-right: 15px;
          padding-left: 15px;
          ${mq("lg")} {
            flex: 0 1 33.3%;
          }
          ${mq("md")} {
            flex: 0 1 50%;
          }
          ${mq("sm")} {
            flex: 0 1 100%;
          }
        }
        h1.title {
          font-family: "Ubuntu", sans-serif;
          font-weight: 700;
          font-size: 17.4rem;
          line-height: 159.93px;
          letter-spacing: -0.1em;
          position: relative;
          left: -10px;
          ${mq("lg")} {
            font-size: 14.6rem;
            left: -8px;
            line-height: 129.93px;
          }
          ${mq("md")} {
            font-size: 10.4rem;
            text-align: center;
            line-height: 79.93px;
          }
          ${mq("sm")} {
            font-size: 7.4rem;
          }
        }
        h2.sub-title {
          font-family: "Ubuntu", sans-serif;
          font-weight: normal;
          font-size: 4.4rem;
          line-height: 51px;
          color: var(--color-primary700);
          ${mq("lg")} {
            font-size: 4rem;
          }
          ${mq("md")} {
            text-align: center;
            font-size: 3.5rem;
          }
          ${mq("sm")} {
            line-height: 31px;
          }
        }
        h1.heading-1 {
          font-family: "Ubuntu", sans-serif;
          font-weight: 700;
          font-size: 9.8rem;
          line-height: 104.8%;
          letter-spacing: -0.1em;
          ${mq("lg")} {
            font-size: 8.5rem;
          }
          ${mq("md")} {
            font-size: 7.1rem;
          }
          ${mq("sm")} {
            font-size: 5rem;
            letter-spacing: -0.05em;
          }
        }
        h3.heading-3 {
          font-family: "Ubuntu", sans-serif;
          font-weight: 500;
          font-size: 2.1rem;
          line-height: 138.6%;
          letter-spacing: 0.02em;
          text-decoration-line: underline;
        }
        h4.heading-4 {
          font-family: "Ubuntu", sans-serif;
          font-weight: 400;
          font-size: 1.8rem;
          line-height: 138.6%;
          letter-spacing: 0.03em;
        }
        .paragraph {
          line-height: 3.2rem;
        }
        .paragraph > div > span {
          display: block;
        }
        .paragraph > div > span:not(:last-child) {
          margin-bottom: 3.4rem;
        }
        .paragraph > div > h1:not(:last-child) {
          margin: 6rem 0 1.8rem 0;
        }
        .paragraph > div > h2:not(:last-child) {
          margin: 4rem 0 1.2rem 0;
        }
        .paragraph > div > h3:not(:last-child) {
          margin: 4rem 0 1rem 0;
        }
        .paragraph > div > h4:not(:last-child) {
          margin: 4rem 0 0rem 0;
        }
        .paragraph li:not(:last-child) {
          margin-bottom: 1rem;
        }
        .caption {
          font-family: "Ubuntu", sans-serif;
          font-style: normal;
          font-weight: 300;
          font-size: 1.4rem;
          line-height: 156.57%;
          letter-spacing: 0.02em;
        }
        .snippit {
          font-style: normal;
          line-height: 155.6%;
        }
        .snippit-xl {
          font-size: 2.25rem;
          font-style: normal;
          line-height: 3.5rem;
          letter-spacing: 0.01em;
          text-align: left;
          ${mq("xl")} {
            font-size: 2.2rem;
          }
        }
        a {
          text-decoration: none;
          &:link {
            text-decoration: inherit;
            color: inherit;
            cursor: pointer;
          }
          &:visited {
            text-decoration: inherit;
            color: inherit;
            cursor: pointer;
          }
        }
        a.anchor,
        button.anchor {
          box-shadow: var(--color-secondary) 0px -0.12em 0px 0px inset;
          transition:
            box-shadow 0.2s ease-in-out,
            color 0.2s ease-in-out;
          &:hover {
            box-shadow: var(--color-secondary) 0px -1.5em 0px 0px inset;
            color: var(--color-background);
          }
        }
        ol,
        ul {
          padding-left: 4rem;
          margin: 3.4rem 0;
        }
        code {
          background: var(--color-codeBackground);
          font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
        }
        .code-container {
          margin-bottom: 3.4rem;
        }

        /* Adaption of PrismJS 1.23.0 with css variables and dark theme support
        https://prismjs.com/download.html#themes=prism&languages=markup+css+clike+javascript */

        /**
         * prism.js default theme for JavaScript, CSS and HTML
         * Based on dabblet (http://dabblet.com)
         * @author Lea Verou
        */
        code[class*="language-"],
        pre[class*="language-"] {
          color: var(--color-codeText);
          background: none;
          text-shadow: var(--color-textShadow);
          font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
          font-size: 1em;
          text-align: left;
          white-space: pre;
          word-spacing: normal;
          word-break: normal;
          word-wrap: normal;
          line-height: 1.5;

          -moz-tab-size: 4;
          -o-tab-size: 4;
          tab-size: 4;

          -webkit-hyphens: none;
          -moz-hyphens: none;
          -ms-hyphens: none;
          hyphens: none;
        }

        pre[class*="language-"]::-moz-selection,
        pre[class*="language-"] ::-moz-selection,
        code[class*="language-"]::-moz-selection,
        code[class*="language-"] ::-moz-selection {
          text-shadow: var(--color-codeTextShadowSelection);
          background: var(--color-codeBackgroundSelection);
        }

        pre[class*="language-"]::selection,
        pre[class*="language-"] ::selection,
        code[class*="language-"]::selection,
        code[class*="language-"] ::selection {
          text-shadow: var(--color-codeTextShadowSelection);
          background: var(--color-codeBackgroundSelection);
        }

        @media print {
          code[class*="language-"],
          pre[class*="language-"] {
            text-shadow: var(--color-codeTextShadowSelection);
          }
        }

        /* Code blocks */
        pre[class*="language-"] {
          padding: 1em;
          margin: 0.5em 0;
          overflow: auto;
          border-radius: var(--color-codeBorderRadius);
        }

        :not(pre) > code[class*="language-"],
        pre[class*="language-"] {
          background: var(--color-codeBackground);
        }

        /* Inline code */
        :not(pre) > code[class*="language-"] {
          padding: 0.1em;
          border-radius: 0.3em;
          white-space: normal;
        }

        .token.comment,
        .token.prolog,
        .token.doctype,
        .token.cdata {
          color: var(--color-codeComment);
        }

        .token.punctuation {
          color: var(--color-codePunctuation);
        }

        .token.namespace {
          opacity: 0.7;
        }

        .token.property,
        .token.tag,
        .token.constant,
        .token.symbol,
        .token.deleted {
          color: var(--color-codeTokenProperty);
        }

        .token.boolean,
        .token.number {
          color: var(--color-codeTokenBoolean);
        }

        .token.selector,
        .token.attr-name,
        .token.string,
        .token.char,
        .token.builtin,
        .token.inserted {
          color: var(--color-codeTokenSelector);
        }
        .token.operator,
        .token.entity,
        .token.url,
        .language-css .token.string,
        .style .token.string {
          color: var(--color-codeTokenOperator);
          /* This background color was intended by the author of this theme. */
          background: var(--color-codeTokenOperatorBackground);
        }

        .token.variable {
          color: var(--color-codeTokenVariable);
        }

        .token.atrule,
        .token.attr-value {
          color: var(--color-codeTokenAtrule);
        }

        .token.keyword {
          color: var(--color-codeTokenKeyword);
        }

        .token.function,
        .token.class-name {
          color: var(--color-codeTokenFunction);
        }

        .token.regex,
        .token.important {
          color: var(--color-codeTokenRegex);
        }

        .token.important,
        .token.bold {
          font-weight: bold;
        }
        .token.italic {
          font-style: italic;
        }

        .token.entity {
          cursor: help;
        }
      `}
    />
  );
};

export default GlobalStyles;
