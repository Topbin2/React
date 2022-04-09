import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  
  const enteredNameIsValid = enteredName.trim() !== '';
  const enteredNameIsInValid = !enteredNameIsValid && enteredNameTouched;

  const inputChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const submitHandler = (e) => {
  };

  const blurHandler = () => {
    setEnteredNameTouched(true);
  };

  const formClassName = enteredNameIsInValid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={submitHandler}>
      <div className={formClassName}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" onChange={inputChangeHandler} value={enteredName} onBlur={blurHandler}/>
        {!enteredNameIsInValid && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
