import React, { useState } from "react"; // eslint-disable-line no-unused-vars
import PortableText from "./portable-text";
import InfoIcon from "./icons/info.svg";
import mq from "../theme/media-queries";

const Note = ({ mark, children }) => {
  const [touched, setTouched] = useState(false);

  const toggleTouchedOnClick = (e) => {
    e.stopPropagation();
    return setTouched((prev) => !prev);
  };
  const toggleTouchedOnKeydown = (e) => {
    /* TO-DO: Implement textbox properly
      jsx-a11y/click-events-have-key-events,
      jsx-a11y/no-static-element-interactions,
      jsx-a11y/no-noninteractive-tabindex
    */
    console.log(e.which);
  };
  return (
    <span
      role="textbox"
      className={`note ${touched ? "note--touched" : ""}`}
      onClick={toggleTouchedOnClick}
      onKeyDown={toggleTouchedOnKeydown}
      tabIndex="0"
      css={{
        borderBottom: "1px dashed #D9BF65",
        transition: `border var(--transition-ease-in-out)`,
        cursor: "help",
        "& a": {
          cursor: "pointer",
        },
        "&:hover": {
          borderBottom: "1px solid #D9BF65",
        },
        "&:hover .note__text": {
          border: "1px dashed #D9BF65",
          borderRadius: "2px",
          [mq("xl")]: {
            border: "unset",
          },
        },
        "&.note--touched .note__text": {
          [mq("xl")]: {
            border: "unset",
            opacity: "1",
            visibility: "visible",
          },
        },
        [mq("xl")]: {
          position: "relative",
        },
      }}
    >
      {children}
      <span
        css={{
          color: "var(--color-text)",
          position: "relative",
          width: "16px",
          height: "100%",
          display: "inline-block",
          "& svg": {
            position: "absolute",
            top: "-2.2rem",
          },
        }}
      >
        <InfoIcon />
      </span>
      <span
        className="note__text"
        css={{
          "@media print": {
            display: "none !important",
          },
          color: "var(--color-text)",
          position: "absolute",
          left: "700px",
          fontSize: "1.2rem",
          lineHeight: "2.1rem",
          width: "100%",
          maxWidth: "220px",
          padding: "11px",
          border: "1px dashed transparent",
          transition: "border var(--transition-ease-in-out)",
          [mq("xl")]: {
            position: "fixed",
            color: "#FEFBF4",
            opacity: "0",
            visibility: "hidden",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "rgba(1, 1, 1, 0.9)",
            borderRadius: "8px",
            maxWidth: "360px",
            transition: "opacity var(--transition-ease-in-out)",
          },
        }}
      >
        <span
          css={{
            "& span": {
              display: "inline",
            },
          }}
        >
          <button
            css={{
              display: "none",
              [mq("xl")]: {
                display: "inline",
                position: "absolute",
                right: "-0.5rem",
                top: "-0.5rem",
                background: "#D9BF65",
                borderRadius: "50%",
                height: "2.2rem",
                width: "2.2rem",
                textAlign: "center",
                color: "#09192B",
              },
            }}
            onClick={toggleTouchedOnClick}
          >
            X
          </button>
          <InfoIcon /> <PortableText blocks={mark.content} />
        </span>
      </span>
    </span>
  );
};

export default Note;
