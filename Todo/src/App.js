import React, { useEffect, useState } from "react";

const App = () => {
  const [todo, setTodo] = useState(["js공부"]);
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodo([...todo, input]);
    setInput('');
  }

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      setInput(e.target.value);
    }
  }

  const handleClick = () => {
    
  };

  useEffect( ()=> {
    console.log('render');
  },[todo]);

  return (
    <div>
      <h1>Todo application</h1>
      <form onSubmit={handleSubmit}>
        <input value={input} type="text" onChange={handleChange} onKeyPress={handleKeyPress}/>
        <button type="submit" onClick={handleClick}>
          click
        </button>
      </form>
      <ul>
        {todo.map( todo => <li>{todo}</li>)}
      </ul>
    </div>
  );
};

export default App;
