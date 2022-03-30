import React, { useReducer, useState } from "react";
import "./App.css";
import Name from "./Name";

const initialState = {
  count: 0,
  students: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const name = action.payload.input;
      const newStudent = { id: Date.now(), name: name, isHere: false };
      return {
        count: state.count + 1,
        students: [...state.students, newStudent],
      };
    case "DELETE":
      return {
        count: state.count - 1,
        students: state.students.filter(
          (student) => student.id !== action.payload.target
        ),
      };
    default:
      return state;
  }
};

function App() {
  const [input, setInput] = useState("");

  const [studentsInfo, dispatch] = useReducer(reducer, initialState);

  const inputChange = (e) => {
    setInput(e.target.value);
  };

  const addName = () => {
    dispatch({ type: "ADD", payload: { input } });
  };

  const deleteButton = (target) => {
    dispatch({ type: "DELETE", payload: { target } });
  };

  return (
    <div>
      <h1>출석부</h1>
      <p>총 학생 수: {studentsInfo.count}</p>
      <input type="text" value={input} onChange={inputChange} />
      <button onClick={addName}>추가</button>
      {studentsInfo.students.map((student) => (
        <Name
          name={student.name}
          key={student.id}
          onDelete={deleteButton}
          id={student.id}
        />
      ))}
    </div>
  );
}

export default App;
