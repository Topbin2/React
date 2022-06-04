import React, { useState, useEffect, useRef } from "react";

import Card from "../UI/Card";
import "./Search.css";

const Search = React.memo((props) => {
  const { onLoadedIngredients } = props;
  const [enteredFilter, setEnteredFilter] = useState("");

  const inputRef = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      if(enteredFilter === inputRef.current.value) {
        const query =
        enteredFilter.length === 0
          ? ""
          : `?orderBy="title"&equalTo="${enteredFilter}"`;
      fetch(
        "https://react-http-9f6b5-default-rtdb.firebaseio.com/ingredients.json" +
          query
      )
        .then((res) => res.json())
        .then((responseData) => {
          const loadedIngredients = [];
          for (let key in responseData) {
            loadedIngredients.push({
              id: key,
              title: responseData[key].title,
              amount: responseData[key].amount,
            });
          }
          onLoadedIngredients(loadedIngredients);
        });
      }
      
    }, 300);
    return () => {
      clearTimeout(timer);
    }
  }, [enteredFilter, onLoadedIngredients, inputRef]);

  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input
            ref={inputRef}
            type="text"
            value={enteredFilter}
            onChange={(e) => setEnteredFilter(e.target.value)}
          />
        </div>
      </Card>
    </section>
  );
});

export default Search;
