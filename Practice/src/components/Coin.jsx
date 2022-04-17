import React from "react";
import { Link } from "react-router-dom";

const Coin = () => {
  return (
    <>
      <h1>Coin detail page!</h1>
      <button>
        <Link to="/coins">go to main page</Link>
      </button>
    </>
  );
};

export default Coin;
