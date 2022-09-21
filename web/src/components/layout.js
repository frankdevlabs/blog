import React from "react"; // eslint-disable-line no-unused-vars
import Header from "./header";
import Footer from "./footer";
import CookieNotice from "./cookie-notice";

const Layout = ({ children }) => {
  return (
    <>
      <CookieNotice />
      <Header />
      <main css={{ minHeight: "80vh" }}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
