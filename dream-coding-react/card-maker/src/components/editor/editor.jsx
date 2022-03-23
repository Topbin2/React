import React from "react";
import Form from "../form/form";
import styles from "./editor.module.css";

const Editor = ({ cards }) => {
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Card Maker</h1>
      {cards.map((card) => (<Form card={card} />))}
    </section>
  );
};

export default Editor;
