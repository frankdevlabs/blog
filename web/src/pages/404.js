import React from "react"; // eslint-disable-line no-unused-vars
import { Link } from "gatsby";
import Seo from "../components/seo";

const NotFoundPage = () => (
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
);

export const Head = () => <Seo title="404: Not found" />;

export default NotFoundPage;
