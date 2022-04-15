import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface IProps {
  name: string;
  id: string;
}

const Image = styled.img`
  width: 10%;
  margin-right: 1rem;
`;

const Coin: React.FC<IProps> = ({ name, id }) => {
  return (
    <li>
      <Link to={{
        pathname: `/${id}`,
        state: { name }
      }}>
        <Image
          src={`https://cryptocurrencyliveprices.com/img/${id}.png`}
          alt="coin-img"
        />
        {name}
      </Link>
    </li>
  );
};

export default Coin;
