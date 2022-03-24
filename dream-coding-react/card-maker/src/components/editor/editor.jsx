import React from "react";
import AddForm from "../addForm/addForm";
import Form from "../form/form";
import styles from "./editor.module.css";

const Editor = ({ FileInput, cards, addCard, updateCard, deleteCard }) => {
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Card Maker</h1>
      {Object.keys(cards).map((key) => (
        <Form
          key={key}
          FileInput={FileInput}
          card={cards[key]}
          updateCard={updateCard}
          deleteCard={deleteCard}
        />
      ))}
      <AddForm FileInput={FileInput} onAdd={addCard} />
    </section>
  );
};

export default Editor;
