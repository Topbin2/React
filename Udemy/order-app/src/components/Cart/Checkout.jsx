import React from 'react';
import styles from './Checkout.module.css';

const Checkout = () => {
  return (
    <form>
      <div className={styles.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" />
      </div>
      <div className={styles.control}>
        <label htmlFor="streen">Street</label>
        <input type="text" id="streen" />
      </div>
      <div className={styles.control}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" />
      </div>
      <div className={styles.control}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" />
      </div>
      <button>Confirm</button>
    </form>
  );
};

export default Checkout;