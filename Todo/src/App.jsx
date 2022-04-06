import React from "react";
import Page from "./components/Page";
import "./App.css";
import ThemeContextProvider from "./context/ThemeContext";
import UserContextProvider from "./context/UserContext";

function App() {
  return (
    <UserContextProvider>
      <ThemeContextProvider>
        <Page />
      </ThemeContextProvider>
    </UserContextProvider>
  );
}

export default App;
