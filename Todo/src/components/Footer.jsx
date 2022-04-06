import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { UserContext } from "../context/UserContext";

const Footer = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);
  const { addCount } = useContext(UserContext);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <footer
      className="header"
      style={{
        backgroundColor: isDark ? "black" : "lightgray",
      }}
    >
      <button className="button" onClick={toggleTheme}>
        Dark Mode
      </button>
      <button className="button" onClick={addCount}>
        Add Count
      </button>
    </footer>
  );
};

export default Footer;
