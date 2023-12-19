import React from "react"; // eslint-disable-line no-unused-vars
import Layout from "./src/containers/layout";
import { ThemeProviderWrapper } from "./src/theme/ThemeContext";
import { CacheProvider } from "@emotion/react";
import { myCache } from "./src/theme/emotion-cache";

// Wraps every page in a component
export const wrapPageElement = ({ element }) => {
  return <Layout>{element}</Layout>;
};
// Wraps the root element in a component
// export const wrapRootElement = ThemeProviderWrapper;
export const wrapRootElement = ({ element }) => {
  return (
    <CacheProvider value={myCache}>
      <ThemeProviderWrapper element={element} />
    </CacheProvider>
  );
};
