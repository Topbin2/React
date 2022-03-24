import React from "react";
import AddForm from "../addForm/addForm";
import Form from "../form/form";
import styles from "./editor.module.css";

const Editor = ({ cards, addCard, updateCard, deleteCard }) => {
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Card Maker</h1>
      {Object.keys(cards).map((key) => (
        <Form
          key={key}
          card={cards[key]}
          updateCard={updateCard}
          deleteCard={deleteCard}
        />
      ))}
      <AddForm onAdd={addCard} />
    </section>
  );
};

export default Editor;
