import React from "react";
import styles from "./Person.module.css";

const Person = ({ name, age, id, onDelete }) => {
  
  const deleteHandler = () => {
    onDelete(id);
  };

  return (
    <ul className={styles.textContainer}>
      <li className={styles.text} onClick={deleteHandler}>
        {name} ({age} years old)
      </li>
    </ul>
  );
};

export default Person;
