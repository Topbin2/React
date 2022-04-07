import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredVale] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event) => {
    setEnteredVale(event.target.value);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  return {
    value: enteredValue,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
  };
};

export default useInput;
