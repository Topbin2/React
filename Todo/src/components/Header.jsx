import React from "react";

const Header = ({ isDark }) => {
  return (
    <header
      className="header"
      style={{
        backgroundColor: isDark ? "black" : "lightgray",
        color: isDark ? "white" : "black",
      }}
    ><h1>Welcome 모상빈</h1></header>
  );
};

export default Header;
