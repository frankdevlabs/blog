import React, { useContext } from "react"; // eslint-disable-line no-unused-vars
import Logo from "./icons/logo.svg";
import { Link } from "gatsby";
import DarkModeIcon from "./icons/dark-mode.svg";
import LightModeIcon from "./icons/light-mode.svg";
import { ThemeContext } from "../theme/ThemeContext";
import mq from "../theme/media-queries";

const Header = () => {
  const { colorMode, setColorMode } = useContext(ThemeContext);
  return (
    <header
      css={{
        padding: `32px var(--padding-outer-default) 0 var(--padding-outer-default)`,
        [mq("lg")]: {
          padding: `32px var(--padding-outer-xl) 0 var(--padding-outer-xl)`,
        },
        [mq("md")]: {
          padding: `32px var(--padding-outer-md) 0 var(--padding-outer-md)`,
        },
        [mq("sm")]: {
          padding: `32px var(--padding-outer-sm) 0 var(--padding-outer-sm)`,
        },
      }}
    >
      <div className="container">
        <div className="flexbox">
          <div
            css={{
              marginBottom: "-1.6rem",
              "svg > path:first-of-type": {
                fill: "var(--color-primary)",
              },
              "svg > circle": {
                fill: "var(--color-primary)",
              },
              [mq("sm")]: {
                marginBottom: "-1rem",
                maxWidth: "35vw",
                svg: {
                  width: "100%",
                },
              },
            }}
          >
            <Link aria-label="home-button" to="/">
              <Logo />
            </Link>
          </div>
          <div
            css={{
              display: "flex",
            }}
          >
            <Link
              className="anchor"
              to="/about/"
              css={{
                fontFamily: "Ubuntu, sans-serif",
                fontSize: "2.4rem",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "2.8rem",
                letterSpacing: "0em",
                textAlign: "left",
                color: "var(--color-primary)",
                paddingTop: "11px",
                marginRight: "30px",
                [mq("sm")]: {
                  paddingTop: "0",
                },
              }}
            >
              over mij
            </Link>
            <button
              aria-label="Light and dark mode switch"
              onClick={() => {
                setColorMode(colorMode === "light" ? "dark" : "light");
              }}
              css={{
                "&:hover svg": {
                  stroke: "var(--color-secondary)",
                },
                "&:hover svg circle": {
                  stroke: `var(--color-secondary !important`,
                },
                "&:hover svg path": {
                  fill: `var(--color-secondary !important`,
                },
                [mq("sm")]: {
                  "svg.icon": {
                    width: "25px",
                    height: "25px",
                  },
                },
              }}
            >
              {colorMode === "light" ? (
                <LightModeIcon className="icon" />
              ) : colorMode === "dark" ? (
                <DarkModeIcon className="icon" />
              ) : null}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
