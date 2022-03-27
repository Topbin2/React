import React from "react";
import styles from "./People.module.css";
import Card from "../Card/Card";
import Person from "../Person/Person";

const People = ({ people, onDelete }) => {
  return (
    <Card>
      {people.map( item => (
      <Person name={item.name} age={item.age} key={item.id} id={item.id} onDelete={onDelete} />
      ))}
    </Card>
  );
};

export default People;
