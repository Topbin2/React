import classes from './CartItem.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../store/productSlice';

const CartItem = (props) => {
  const { name, price, amount, totalPrice } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(increment());
  };

  const decrementHandler = () => {
    dispatch(decrement());
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{name}</h3>
        <div className={classes.price}>
          ${totalPrice.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{amount}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={incrementHandler}>+</button>
          <button onClick={decrementHandler}>-</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
