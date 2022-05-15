import React from "react";
import { useSetRecoilState } from "recoil";

import { toDoState } from '../atoms';
import { ITodo } from "../atoms";



const ToDo = ({ text, category, id }: ITodo) => {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { currentTarget: { name } } = event;
    setToDos(oldToDos => {
      const targetIndex = oldToDos.findIndex(toDo => toDo.id === id);
      const oldToDo = oldToDos[targetIndex];
      const newToDo = { text, id, category: name };
      console.log(oldToDo, newToDo);
      return oldToDos;
    })
  };

  return <li>
    <span>{text}</span>
    {category !== "DOING" && <button name="DOING" onClick={onClick}>Doing</button>}
    {category !== "TO_DO" && <button name="TO_DO" onClick={onClick}>To Do</button>}
    {category !== "DONE" && <button name="DONE" onClick={onClick}>Done</button>}
    </li>;
};

export default ToDo;
