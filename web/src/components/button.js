import React, { useContext } from "react"; // eslint-disable-line no-unused-vars
import ThemeContext from "../theme/ThemeContext";
import { getTheme } from "../theme/theme";

const Button = ({ children, onClick }) => {
  const { theme } = useContext(ThemeContext);
  const { button, buttonText, buttonHover } = getTheme(theme);
  return (
    <button
      onClick={onClick}
      css={{
        background: button,
        borderRadius: "5px",
        padding: "15px 35px",
        color: buttonText,
        fontStyle: "normal",
        fontWeight: "300",
        fontSize: "1.6rem",
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        letterSpacing: "0.01em",
        "&:hover": {
          background: buttonHover,
        },
      }}
    >
      {children}
    </button>
  );
};

export default Button;
