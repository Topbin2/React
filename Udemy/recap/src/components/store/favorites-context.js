import { createContext, useState } from "react";

const FavoritesContext = createContext({   // 인자 안에 initial value
  favorites: [],
  totalFavorites: 0,
});

const FavoritesContextProvider = (props) => {
  const [userFavorites, setUserFavorites] = useState([]);

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
  };

  <FavoritesContext.Provider value={context}>
    {props.children}
  </FavoritesContext.Provider>
};