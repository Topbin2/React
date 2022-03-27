import { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import Modal from "./components/Modal/Modal";
import People from "./components/People/People";

function App() {
  const [people, setPeople] = useState([
    {name: 'sangbin', age: 29, id: 1},
    {name: 'kong', age: 10, id: 2},
    {name: 'dahyun', age: 29, id: 3}
  ]);

  const [valid, setValid] = useState(true);

  const addPersonHandler = (data) => {
    setPeople( prev => {
      const updatePeople = [...prev, data];
      return updatePeople;
    });
  };

  const deletePersonHandler = (id) => {
    setPeople( prev => {
      const updatePeople = prev.filter( item => item.id !== id);
      return updatePeople;
    });
  };

  const modalHandler = (isvalid)=> {
    setValid(isvalid);
  };

  const modalClose = (isvalid) => {
    setValid(!isvalid);
  }

  return (
    <>
      <Form onAddPerson={addPersonHandler} onModal={modalHandler} />
      <People people={people} onDelete={deletePersonHandler} />
      {!valid && <Modal onModal={modalClose} />}
    </>
  );
}

export default App;
