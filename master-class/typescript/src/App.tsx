import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
`;

const H1 = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

interface DummyProps {
  text: string;
  otherThingHere?: boolean;
}

function Dummy({ text, otherThingHere }: DummyProps) {
  return <h1>{text}</h1>;
}

function App() {
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("clicl!");
  };

  return (
    <Container>
      <Dummy text="sangbin" />
        <button onClick={onClick}>btn</button>
    </Container>
  );
}

export default App;
