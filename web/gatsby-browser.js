import React from "react"; // eslint-disable-line no-unused-vars

import App from "./src/components/app";

export const wrapRootElement = ({ element }) => {
  return <App>{element}</App>;
};
