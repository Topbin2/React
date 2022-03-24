import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ authService }) => {
    const [cards, setCards] = useState([
      {
        id: '1',
        name: 'Ellie',
        company: 'Samsung',
        theme: 'dark',
        title: 'Engineer',
        email: 'eliie@gmail.com',
        message: 'go for it',
        fileName: 'ellie',
        fileURL: null,
      },
      {
        id: '2',
        name: 'Snagbin',
        company: 'Samsung',
        theme: 'colorful',
        title: 'Engineer',
        email: 'eliie@gmail.com',
        message: 'go for it',
        fileName: 'ellie',
        fileURL: null,
      },
      {
        id: '3',
        name: 'Kong',
        company: 'Samsung',
        theme: 'light',
        title: 'Engineer',
        email: 'eliie@gmail.com',
        message: 'go for it',
        fileName: 'ellie',
        fileURL: null,
      },
    ]);
    const navigate = useNavigate();

    const onLogout = ()=> {
        authService.logout();
    };

    useEffect(()=> {
        authService.onAuthChange(user => {
            if(!user) {
                navigate('/');
            }
        })
    });

    const addCard = (card)=> {
      const updated = [...cards, card];
      setCards(updated);
    };

  return (
    <section className={styles.maker}>
      <Header className={styles.header} onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} addCard={addCard} />
        <Preview cards={cards} />
      </div>
      <Footer className={styles.footer} />
    </section>
  );
};

export default Maker;
