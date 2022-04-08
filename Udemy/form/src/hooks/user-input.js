import { useReducer } from "react";

const initialInputState = {
  value: "",
  isTouched: false,
};

const inpiutStateReducer = (state, action) => {
  if (action.type === "INPUT") {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === "BLUR") {
    return { value: state.value, isTouched: true };
  }
  if (action.type === "RESET") {
    return { value: "", isTouched: false };
  }
  return inpiutStateReducer;
};

const useInputs = (validateValue) => {
  const [inputState, dispatch] = useReducer(
    inpiutStateReducer,
    initialInputState
  );

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (event) => {
    dispatch({ type: "INPUT", value: event.target.value });
  };

  const blurHandler = () => {
    dispatch({ type: "BLUR" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return {
    value: inputState.value,
    hasError,
    valueChangeHandler,
    blurHandler,
    reset,
  };
};

export default useInputs;
