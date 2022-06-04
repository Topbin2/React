import React, { useState, useEffect } from "react";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import Search from "./Search";

const Ingredients = () => {
  const [userIngredients, setUserIngredients] = useState([]);

  const removeIngredientHandler = () => {};

  const filteredIngredientsHandler = (filteredIngredients) => {
    setUserIngredients(filteredIngredients);
  };

  const addIngredientHandler = async (ingredient) => {
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
        <Search onLoadedIngredients={filteredIngredientsHandler} />
        <IngredientList
          ingredients={userIngredients}
          onRemoveItem={removeIngredientHandler}
        />
      </section>
    </div>
  );
};

export default Ingredients;
