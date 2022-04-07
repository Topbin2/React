import useInputs from "../hooks/user-input";

const BasicForm = (props) => {
  const {
    value: enteredFirstName,
    isValid: enteredFirstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    blurHandler: firstNameBlurHandler,
    reset: firstNameReset,
  } = useInputs(value => value.trim() !== '');

  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(enteredFirstName);
    firstNameReset();
  };

  const firstNameClass = firstNameHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={firstNameClass}>
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" onChange={firstNameChangeHandler} onBlur={firstNameBlurHandler} value={enteredFirstName} />
          {firstNameHasError && <p>check your first name!</p>}
        </div>
        <div className="form-control">
          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" />
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="email">E-Mail Address</label>
        <input type="text" id="email" />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
