import React from "react"; // eslint-disable-line no-unused-vars

import ThemeProvider from "../theme/ThemeProvider";

function App({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

export default App;
