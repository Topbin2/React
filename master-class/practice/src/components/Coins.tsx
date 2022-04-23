import { useQuery } from "react-query";
import styled from "styled-components";

import Coin from "./Coin";
import { fetchCoins } from "../api";

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
`;

interface CoinsData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

const Coins = () => {
  const { isLoading, data } = useQuery<CoinsData[]>("coins", fetchCoins);

  return (
    <Container>
      <h1>Coins</h1>
      {isLoading ? (
        "Loading..."
      ) : (
        <ul>
          {data?.map((coin) => (
            <Coin key={coin.id} id={coin.id} name={coin.name} />
          ))}
        </ul>
      )}
    </Container>
  );
};

export default Coins;
