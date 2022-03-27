import React from "react";
import styles from "./Modal.module.css";

const Modal = ({ onModal }) => {
  const onModalHandler = () => {
    onModal(false);
  };

  return (
    <div className={styles.modal}>
      <div className={styles.container}>
        <header className={styles.header}>
          <p>Invalid input</p>
        </header>
        <main className={styles.main}>
          <p className={styles.text}>
            Please enter a valid name and age (non-empty values)
          </p>
          <button className={styles.button} onClick={onModalHandler}>
            Okay
          </button>
        </main>
      </div>
    </div>
  );
};

export default Modal;
