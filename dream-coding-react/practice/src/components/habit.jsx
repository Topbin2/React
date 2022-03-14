import React, { useState } from 'react';


const Habit = () => {
    const [habits, setHabits] = useState(
        { id: 1, name: 'Reading', count: 0 }
      );

    const handleIncrement = () => {
        setHabits(habits.count + 1);
    }

    console.log(habits);
    
    return (
        <div className='container'>
         <span className='habit-name'>{habits.name}</span>
         <span className='habit-count'>{habits.count}</span>   
         <button onClick={handleIncrement}>+</button>
         <button>-</button>
         <button>x</button>
        </div>
    );
};

export default Habit;