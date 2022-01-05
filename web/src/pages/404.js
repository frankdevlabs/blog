import React from "react"; // eslint-disable-line no-unused-vars
import { Link } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import ThemeProvider from "../theme/ThemeProvider";

const NotFoundPage = () => (
  <ThemeProvider>
    <Layout>
      <Seo title="404: Not found" />
      <section>
        <div className="container">
          <h1 css={{ paddingTop: "13vh" }} className="heading-1">
            ERROR! Pagina niet gevonden!
          </h1>
          <p className="paragraph" css={{ paddingTop: "2rem" }}>
            Deze pagina bestaat niet....{" "}
            <Link className="anchor" to="/">
              Ga terug
            </Link>
          </p>
        </div>
      </section>
    </Layout>
  </ThemeProvider>
);

export default NotFoundPage;
