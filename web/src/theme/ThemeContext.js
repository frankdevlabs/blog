import React from "react";
import { CacheProvider } from "@emotion/react";
import { myCache } from "./emotion-cache";

import { COLORS, TRANSITION_TIMES, COLOR_MODE_KEY, INITIAL_COLOR_MODE_CSS_PROP } from "./constants";
export const ThemeContext = React.createContext();

export const ThemeProvider = ({ element }) => {
  const [colorMode, rawSetColorMode] = React.useState(undefined);

  React.useEffect(() => {
    const root = window.document.documentElement;

    // Because colors matter so much for the initial page view, we're
    // doing a lot of the work in gatsby-ssr. That way it can happen before
    // the React component tree mounts.
    const initialColorValue = root.style.getPropertyValue(INITIAL_COLOR_MODE_CSS_PROP);

    rawSetColorMode(initialColorValue);
  }, []);

  const contextValue = React.useMemo(() => {
    function setColorMode(newValue) {
      const root = window.document.documentElement;

      localStorage.setItem(COLOR_MODE_KEY, newValue);

      Object.entries(COLORS).forEach(([name, colorByTheme]) => {
        const cssVarName = `--color-${name}`;

        root.style.setProperty(cssVarName, colorByTheme[newValue]);
      });

      Object.entries(TRANSITION_TIMES).forEach(([name, transitionTimeByTheme]) => {
        const cssVarName = `--transition-time-${name}`;
        root.style.setProperty(cssVarName, transitionTimeByTheme[newValue]);
      });

      rawSetColorMode(newValue);
    }

    return {
      colorMode,
      setColorMode,
    };
  }, [colorMode, rawSetColorMode]);

  return (
    <CacheProvider value={myCache}>
      <ThemeContext.Provider value={contextValue}>{element}</ThemeContext.Provider>
    </CacheProvider>
  );
};

export const ThemeProviderWrapper = ({ element }) => {
  return <ThemeProvider element={element} />;
};
