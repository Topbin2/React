import React, { useState, useEffect } from "react";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import Search from "./Search";

const Ingredients = () => {
  const [userIngredients, setUserIngredients] = useState([]);

  const addIngredientHandler = (ingredient) => {
    setUserIngredients((prevIngredient) => [
      ...prevIngredient,
      {
        id: Math.random().toString(),
        ...ingredient,
      },
    ]);
  };

  useEffect(() => {
    fetch('https://react-http-9f6b5-default-rtdb.firebaseio.com/ingredients.json')
    .then((res) => res.json())
    .then((data) => {
      const ingredients = [];
      for(let key in data) {
        const ingredient = {
          id: key,
          ...data[key],
        };
        ingredients.push(ingredient);
      }
      return ingredients;
    })
    .then((result) => setUserIngredients((prevIngredients) => [...prevIngredients, ...result]))
  }, [])

  console.log(userIngredients);

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
