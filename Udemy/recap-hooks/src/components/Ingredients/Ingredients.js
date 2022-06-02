import React, { useState, useEffect } from "react";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import Search from "./Search";

const Ingredients = () => {
  const [userIngredients, setUserIngredients] = useState([]);

  const addIngredientHandler = async (ingredient) => {
    // fetch(
    //   "https://react-http-9f6b5-default-rtdb.firebaseio.com/ingredients.json",
    //   {
    //     method: "POST",
    //     body: JSON.stringify(ingredient),
    //     headers: {
    //       "Content-type": "application/json",
    //     },
    //   }
    // )
    //   .then((response) => response.json())
    //   .then((data) =>
    //     setUserIngredients((prev) => [
    //       ...prev,
    //       { id: data.name, ...ingredient },
    //     ])
    //   );

    const response = await fetch(
      "https://react-http-9f6b5-default-rtdb.firebaseio.com/ingredients.json",
      {
        method: "POST",
        body: JSON.stringify(ingredient),
        headers: {
          "Content-type": "applications/json",
        },
      }
    );
    const data = await response.json();
    setUserIngredients((prev) => [...prev, { id: data.name, ...ingredient }]);
  };

  useEffect(() => {
    fetch(
      "https://react-http-9f6b5-default-rtdb.firebaseio.com/ingredients.json"
    )
      .then((res) => res.json())
      .then((data) => {
        const ingredients = [];
        for (let key in data) {
          const ingredient = {
            id: key,
            ...data[key],
          };
          ingredients.push(ingredient);
        }
        return ingredients;
      })
      .then((result) =>
        setUserIngredients((prevIngredients) => [...prevIngredients, ...result])
      );
  }, []);

  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientHandler} />

      <section>
        <Search />
        <IngredientList ingredients={userIngredients} onRemoveItem={() => {}} />
      </section>
    </div>
  );
};

export default Ingredients;
