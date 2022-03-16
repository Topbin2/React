import React, { useRef } from "react";
import styles from "./VideoSearch.module.css";

const VideoSearch = (props) => {
    const inputRef = useRef();
    const handleSubmit = (e)=> {
        const value = inputRef.current.value;
        props.onSearch(value);
    };

    const onKeyPress = (e)=> {
        if(e.key === 'Enter') {
            handleSubmit();
        }
    };

    const onClick = ()=> {
        handleSubmit();
    };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.logoImg} src="/images/logo.png" alt="logo" />
      </div>
      <input ref={inputRef} className={styles.input} type="text" onKeyPress={onKeyPress} />
      <button className={styles.button} type="submit" onClick={onClick} >
        <img className={styles.buttonImg} src="/images/search.png" alt="logo" />
      </button>
    </header>
  );
};

export default VideoSearch;
