import { useEffect, useState } from 'react';
import styled from "styled-components";

import Coin from '../components/Coin';

const Container = styled.div`
  margin-top: 2rem;
  text-align: center;
  h1 {
    font-size: 4rem;
  }
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  li {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem;
    width: 50%;
    height: 4rem;
    border-radius: 10px;
    color: ${props => props.theme.bgColor};
    background-color: ${props => props.theme.textColor};
  }
`;

interface CoinsData {
  id:        string;
  name:      string;
  symbol:    string;
  rank:      number;
  is_new:    boolean;
  is_active: boolean;
  type:      string;
}

const Coins = () => {
  const [coins, setCoins] = useState<CoinsData[]>();

  useEffect(() => {
    const fetchCoins = async () => {
      const response = await fetch('https://api.coinpaprika.com/v1/coins');
      const result = await response.json();
      setCoins(result.slice(0, 50));
    }
    fetchCoins();
  }, [])

  return (
    <Container>
      <h1>Coins</h1>
      <ul>
        {coins?.map((coin) => <Coin key={coin.id} name={coin.name} id={coin.id} />)}
      </ul>
    </Container>
  );
};

export default Coins;
