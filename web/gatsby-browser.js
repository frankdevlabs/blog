import React from "react"; // eslint-disable-line no-unused-vars
import Layout from "./src/containers/layout";
import { ThemeProviderWrapper } from "./src/theme/ThemeContext";

// Wraps every page in a component
export const wrapPageElement = ({ element }) => {
  return <Layout>{element}</Layout>;
};
// Wraps the root element in a component
export const wrapRootElement = ThemeProviderWrapper;
