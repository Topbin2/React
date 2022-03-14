import React, { useState } from 'react';
import './habit.css';

  
const Habit = (props) => {
    const [state, setState] = useState(props);
    const [num, setNum] = useState(props.count);

    const increaseHandler = ()=> {
        setNum(num + 1);
    };

    const DecreaseHandler = ()=> {
        setNum(num - 1);
    };

    const DeleteHandler = ()=> {
        setState();
        console.log(state);
    };

    return (
        <div className="container">
            <div>{props.name}</div>
            <div>{num}</div>
            <button onClick={increaseHandler}>+</button>
            <button onClick={DecreaseHandler}>-</button>
            <button onClick={DeleteHandler}>x</button>
        </div>
    );
};

export default Habit;