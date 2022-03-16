import React from "react";
import styles from "./VideoSearch.module.css";

const VideoSearch = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.logoImg} src="/images/logo.png" alt="logo" />
      </div>
      <input className={styles.input} type="text" />
      <button className={styles.button} type="submit">
        <img className={styles.buttonImg} src="/images/search.png" alt="logo" />
      </button>
    </header>
  );
};

export default VideoSearch;
