import userInputs from "../hooks/user-input";

const BasicForm = () => {
  const {
    value: enteredFirstName,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    blurHandler: firstNameBlurHandler,
    reset: firstNameReset,
  } = userInputs((value) => value.trim() !== "");

  const {
    value: enteredLastName,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    blurHandler: lastNameBlurHandler,
    reset: lastNameReset,
  } = userInputs((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    blurHandler: emailBlurHandler,
    reset: emailReset,
  } = userInputs((value) => value.includes("@"));

  let formIsValid = false;
  if (enteredFirstName && enteredLastName && enteredEmail) {
    formIsValid = true;
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();
    firstNameReset();
    lastNameReset();
    emailReset();
  };

  const firstNameClass = firstNameHasError
    ? "form-control invalid"
    : "form-control";

  const lastNameClass = lastNameHasError
    ? "form-control invalid"
    : "form-control";

  const emaliClass = emailHasError ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={firstNameClass}>
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            value={enteredFirstName}
          />
          {firstNameHasError && (
            <p className="error-text">check your first name!</p>
          )}
        </div>
        <div className={lastNameClass}>
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={enteredLastName}
          />
          {lastNameHasError && (
            <p className="error-text">check your last name!</p>
          )}
        </div>
      </div>
      <div className={emaliClass}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="text"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailHasError && <p className="error-text">check your email!</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
