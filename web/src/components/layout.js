import React from "react"; // eslint-disable-line no-unused-vars
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main css={{ minHeight: "80vh" }}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
