import React, { Fragment } from 'react';
import styles from './Header.module.css';
import mealsImage from '../../aseets/meals.jpg';

const Header = (porops) => {
    return (
        <Fragment>
            <header className={styles.header}>
                <h1>ReactMeals</h1>
                <button>Cart</button>
            </header>
            <div className={styles.mainImage}>
                <img src={mealsImage} alt="A table full of delicious food!" />
            </div>
        </Fragment>
    );
};


export default Header;