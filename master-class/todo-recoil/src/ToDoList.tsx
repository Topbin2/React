import React, { useState } from "react";

const ToDoList = () => {
  const [todo, setTodo] = useState('');
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    setTodo(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(todo);
    setTodo('');
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={todo} onChange={onChange} type="text" placeholder="Write a to do" />
        <button>add</button>
      </form>
    </div>
  );
};

export default ToDoList;