import React, { useContext, useRef } from "react";
import { UserContext } from "../context/UserContext";

const Input = () => {
  const { changeName } = useContext(UserContext);

  const inputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const inputValue = inputRef.current.value;
    changeName(inputValue);
    inputRef.current.value = '';
    inputRef.current.focus();
  };

  return (
    <form onSubmit={submitHandler}>
      <input ref={inputRef} type="text" />
      <button type="submit">BUTTON</button>
    </form>
  );
};

export default Input;
