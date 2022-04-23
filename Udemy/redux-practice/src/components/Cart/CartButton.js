import classes from "./CartButton.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeValid } from "../../store/uiSlice";

const CartButton = () => {
  const { amount } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const validateHandler = () => {
    dispatch(changeValid());
  };

  return (
    <button className={classes.button} onClick={validateHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{amount}</span>
    </button>
  );
};

export default CartButton;
