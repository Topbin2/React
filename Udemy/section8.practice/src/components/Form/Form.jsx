import React, { useState } from "react";
import Button from "../Button/Button";
import Card from "../Card/Card";
import styles from "./Form.module.css";

const Form = ({ onAddPerson, onModal }) => {
  const [inputText, setInputText] = useState("");
  const [inputAge, setInputAge] = useState("");
  const [valid, setValid] = useState(true);

  const textChangeHandler = (e) => {
    setInputText(e.target.value);
  };

  const AgeChangeHandler = (e) => {
    setInputAge(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (inputText === '' || inputAge === '') {
      setValid(false);
      onModal(false);
    } else {
      const data = {
        name: inputText,
        age: inputAge,
        id: Date.now(),
      };
      setValid(true);
      onAddPerson(data);
      setInputText("");
      setInputAge("");
    }
  };

  return (
    <Card>
      <form className={styles.form} onSubmit={submitHandler}>
        <label className={`${styles.label} ${!valid && styles.valid}`} htmlFor="name">
          UserName
        </label>
        <input
          className={`${styles.input} ${!valid && styles.valid}`}
          value={inputText}
          onChange={textChangeHandler}
          type="text"
          id="name"
        />
        <label className={`${styles.label} ${!valid && styles.valid}`} htmlFor="age">
          Age (Years)
        </label>
        <input
          className={`${styles.input} ${!valid && styles.valid}`}
          value={inputAge}
          onChange={AgeChangeHandler}
          type="number"
          id="age"
        />
        <Button type="submit" children="Add user" />
      </form>
    </Card>
  );
};

export default Form;
