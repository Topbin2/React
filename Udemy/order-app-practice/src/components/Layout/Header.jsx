import React, { Fragment } from 'react';
import styles from './Header.module.css';
import mealsImage from '../../aseets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = (porops) => {
    return (
        <Fragment>
            <header className={styles.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton />
            </header>
            <div className={styles.mainImage}>
                <img src={mealsImage} alt="A table full of delicious food!" />
            </div>
        </Fragment>
    );
};


export default Header;