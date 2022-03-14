import React, {useState} from 'react';

const Form = (props) => {
    const [inputValue, setInputValue] = useState('');
    const handleChange = (e)=> {
        setInputValue(e.target.value);
    };

    const formSubmit = (e)=> {
        e.preventDefault();
        props.onSubmit(inputValue);
        e.target.reset();
    };


    return (
        <form onSubmit={formSubmit}>
            <input type="text" onChange={handleChange} />
            <button>Add</button>
        </form>
    );
};

export default Form;