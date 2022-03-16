import React, { useRef, useState } from "react";
import styles from "./VideoSearch.module.css";

const VideoSearch = (props) => {
    const [input, setInput] = useState('');

    const handleSubmit = ()=> {
        props.onSearch(input);
    };

    const onChange = (e) => {
        setInput(e.target.value);
    };

    const onKeyPress = (e)=> {
        if(e.key === 'Enter') {
            handleSubmit();
            setInput('');
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
      <input value={input} className={styles.input} type="text" onChange={onChange} onKeyPress={onKeyPress} />
      <button className={styles.button} type="submit" onClick={onClick} >
        <img className={styles.buttonImg} src="/images/search.png" alt="logo" />
      </button>
    </header>
  );
};

export default VideoSearch;
