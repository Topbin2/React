import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    font-family: 'Source Sans Pro', sans-serif;
    background-color:${(props) => props.theme.bgColor};
    color:${(props) => props.theme.textColor};
    line-height: 1.2;
    font-weight: 300;
  }
  ol, ul {
    list-style: none;
  }
  a {
    text-decoration:none;
    color:inherit;
  }
`;

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
    </React.Fragment>
  );
}

export default App;
