import React from "react";
import AddForm from "../addForm/addForm";
import Form from "../form/form";
import styles from "./editor.module.css";

const Editor = ({ cards, addCard }) => {
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Card Maker</h1>
      {cards.map((card) => (<Form key={card.id} card={card} />))}
      <AddForm onAdd={addCard}/>
    </section>
  );
};

export default Editor;
