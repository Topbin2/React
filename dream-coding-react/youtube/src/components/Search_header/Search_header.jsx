import React from "react";
import styles from "./Search_header.module.css";

const Search_header = (props) => {
  return (
    <header>
      <img src="/images/logo.png" alt="logo" />
      <h1>Youtube</h1>
      <input type="text" placeholder="Search" />
      <button type="submit">
          <img src="/images/search.png" alt="search" />
      </button>
    </header>
  );
};

export default Search_header;
