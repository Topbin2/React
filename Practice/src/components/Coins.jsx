import React from "react";
import { Link } from "react-router-dom";

const Coins = () => {
  return (
    <>
      <h1>Coins page!</h1>
      <button><Link to="/bit">go to detail page</Link></button>
    </>
  );
};

export default Coins;
