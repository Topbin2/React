import { createContext, useState } from "react";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [name, setName] = useState('콩이');
  const [count, setCount] = useState(0);

  const addCountHandler = () => {
    setCount(prevCount => prevCount + 1);
  };

  const changeNameHandler = (text) => {
    setName(text);
  }

  const contextValue = {
    name,
    count,
    addCount: addCountHandler,
    changeName: changeNameHandler,
  };

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};

export default UserContextProvider;