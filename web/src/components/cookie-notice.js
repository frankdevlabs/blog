import React, { useEffect, useState } from "react"; // eslint-disable-line no-unused-vars
import { Link } from "gatsby";
import CookieIcon from "./icons/cookie.svg";
import Button from "./button";
import mq from "../theme/media-queries";
import useCookie from "../lib/useCookie";

const CookieNotice = () => {
  const [showNotice, setShowNotice] = useCookie("showNotice", 1);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!showNotice) return setActive(showNotice);

    const timer = setTimeout(() => {
      setActive(showNotice);
    }, 2000);
    return () => clearTimeout(timer);
  }, [showNotice]);

  return (
    <div
      css={{
        position: "fixed",
        maxWidth: "410px",
        maxHeight: "304px",
        background: "var(--color-modalBackground)",
        boxShadow: "0px 15px 35px rgba(0, 0, 0, 0.15)",
        borderRadius: "5px",
        padding: "3.9rem 4.1rem",
        opacity: `${active ? "1" : "0"}`,
        transition: "all .5s ease-in-out",
        zIndex: `${active ? "100" : "-5"}`,
        right: `${active ? "7%" : "-46rem"}`,
        bottom: "7%",
        [mq("md")]: {
          margin: "2rem auto",
          right: `${active ? "0rem" : "-46rem"}`,
          left: "0",
          bottom: "2rem",
          width: "94%",
        },
        [mq("sm")]: {
          bottom: "0.5rem",
        },
      }}
    >
      <div
        css={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CookieIcon />
      </div>
      <p
        css={{
          fontWeight: "300",
          fontSize: "1.6rem",
          lineHeight: "156.57%",
          textAlign: "center",
          paddingTop: "2.5rem",
        }}
      >
        Deze website maakt gebruik van functionele en analytische cookies en vergelijkbare
        technieken.{" "}
        <Link className="anchor" to="/privacy/">
          Meer informatie
        </Link>
      </p>
      <div
        css={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "3.5rem",
        }}
      >
        <Button onClick={() => setShowNotice(0)}>Sluiten</Button>
      </div>
    </div>
  );
};

export default CookieNotice;
