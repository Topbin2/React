import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

interface IProp {
  key: string;
  id: string;
  name: string;
}

const Container = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  width: 50%;
  height: 4rem;
  border-radius: 10px;
  color: ${(props) => props.theme.bgColor};
  background-color: ${(props) => props.theme.textColor};

  img {
    margin-right: 1rem;
    width: 7%;
  }
`;

const Coin: React.FC<IProp> = ({ id, name }) => {
  return (
    <Container>
      <Link
        to={{
          pathname: `/${id}`,
          state: { id, name },
        }}
      >
        <img
          src={`https://cryptocurrencyliveprices.com/img/${id}.png`}
          alt="coin"
        />
        {name}
      </Link>
    </Container>
  );
};

export default Coin;
