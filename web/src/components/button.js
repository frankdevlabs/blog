import React from "react"; // eslint-disable-line no-unused-vars

const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      css={{
        background: "var(--color-button)",
        borderRadius: "5px",
        padding: "15px 35px",
        color: "var(--color-buttonText)",
        fontStyle: "normal",
        fontWeight: "300",
        fontSize: "1.6rem",
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        letterSpacing: "0.01em",
        "&:hover": {
          background: "var(--color-buttonHover)",
        },
      }}
    >
      {children}
    </button>
  );
};

export default Button;
