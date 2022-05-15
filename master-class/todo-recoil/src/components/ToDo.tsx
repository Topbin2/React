import React from "react";
import { useSetRecoilState } from "recoil";

import { toDoState } from '../atoms';
import { ITodo } from "../atoms";

const ToDo = ({ text, category, id }: ITodo) => {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {

    const { currentTarget: { name } } = event;

  };

  return <li>
    <span>{text}</span>
    {category !== "DOING" && <button name="DOING" onClick={onClick}>Doing</button>}
    {category !== "TO_DO" && <button name="TO_DO" onClick={onClick}>To Do</button>}
    {category !== "DONE" && <button name="DONE" onClick={onClick}>Done</button>}
    </li>;
};

export default ToDo;