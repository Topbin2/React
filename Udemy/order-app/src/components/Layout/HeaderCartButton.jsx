import React, { useContext } from 'react';
import CartContext from '../../store/CartContext';
import CartIcon from "../Cart/CartIcon";
import styles from './HeaderCartButton.module.css';

const HeaderCartButton = ({ onClick }) => {
    const cartCtx = useContext(CartContext);

    const btnClasses = `${styles.button} ${styles.bump}`;

    const numberOfCartItems = cartCtx.items.reduce( (curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    return (
        <button className={btnClasses} onClick={onClick}>
            <span className={styles.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={styles.badge}>
                {numberOfCartItems}
            </span>
        </button>
    );
};

export default HeaderCartButton;