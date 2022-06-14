import React, { useReducer, useState } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
    case "ADD":
      const newStudent = {
        id: Math.random(),
        name: action.payload,
      };
      return [...state, newStudent];
    case "DELETE":
      return state.filter((el) => el.id !== action.payload);
  }
};

const initialState = [{ id: 1, name: "모상빈" }];

const App = () => {
  const [enteredName, setEnteredName] = useState("");

  const [students, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1>출석부</h1>
      <br />
      <p>총 학생 수: 0</p>
      <input
        type="text"
        value={enteredName}
        onChange={(e) => setEnteredName(e.target.value)}
      />
      <button onClick={() => dispatch({ type: "ADD", payload: enteredName })}>
        추가
      </button>
      {students.map((student) => {
        return (
          <div>
            <span>{student.name}</span>
            <button
              onClick={() => dispatch({ type: "DELETE", payload: student.id })}
            >
              삭제
            </button>
          </div>
        );
      })}
    </>
  );
};

export default App;
