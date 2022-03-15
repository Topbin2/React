import React from "react";
import styles from "./Search_header.module.css";

const Search_header = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.img} src="/images/logo.png" alt="logo" />
        <h1 className={styles.title}>Youtube</h1>
      </div>
      <input className={styles.input} type="text" placeholder="Search" />
      <button className={styles.button} type="submit">
        <img className={styles.buttonImg} src="/images/search.png" alt="search" />
      </button>
    </header>
  );
};

export default Search_header;
