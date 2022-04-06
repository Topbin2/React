import React, { useState } from "react";
import Page from "./components/Page";
import "./App.css";

function App() {
  const [isDark, setIsDark] = useState(false);
  
  return <Page isDark={isDark} setIsDark={setIsDark} />;
}

export default App;
