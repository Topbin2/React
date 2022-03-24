import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ authService, FileInput }) => {
  const [cards, setCards] = useState({
    1: {
      id: "1",
      name: "Ellie",
      company: "Samsung",
      theme: "dark",
      title: "Engineer",
      email: "eliie@gmail.com",
      message: "go for it",
      fileName: "ellie",
      fileURL: null,
    },
    2: {
      id: "2",
      name: "Snagbin",
      company: "Samsung",
      theme: "colorful",
      title: "Engineer",
      email: "eliie@gmail.com",
      message: "go for it",
      fileName: "ellie",
      fileURL: null,
    },
    3: {
      id: "3",
      name: "Kong",
      company: "Samsung",
      theme: "light",
      title: "Engineer",
      email: "eliie@gmail.com",
      message: "go for it",
      fileName: "ellie",
      fileURL: null,
    },
  });

  const navigate = useNavigate();

  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        navigate("/");
      }
    });
  });

  const addCard = (card) => {
    const updated = [...cards, card];
    setCards(updated);
  };

  const createOrUpdateCard = (card) => {
    setCards(cards => {
      const updated = {...cards};
      updated[card.id] = card;
      return updated;
    });
  };

  const deleteCard = (card) => {
    setCards(cards => {
      const updated = {...cards};
      delete updated[card.id];
      return updated;
    });
  };

  return (
    <section className={styles.maker}>
      <Header className={styles.header} onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          FileInput={FileInput}
          cards={cards}
          addCard={createOrUpdateCard}
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer className={styles.footer} />
    </section>
  );
};

export default Maker;
