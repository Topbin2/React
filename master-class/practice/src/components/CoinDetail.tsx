import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin: 3rem 0;
    font-size: 4rem;
    font-weight: 400;
    color: ${(props) => props.theme.accentColor};
  }

  p {
    font-weight: 400;
  }
`;

const Description = styled.div`
  width: 50%;
  font-weight: 400;
`

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1.5rem;
  padding: 1rem;
  width: 50%;
  height: 70px;
  font-weight: 400;
  border-radius: 10px;
  color: ${(props) => props.theme.textColor};
  background-color: black;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      margin: 0.5rem;
    }
  }
`;

interface locationState {
  name: string;
  id: string;
}

interface IInfo {
  id:                 string;
  name:               string;
  symbol:             string;
  rank:               number;
  is_new:             boolean;
  is_active:          boolean;
  description:        string;
  open_source:        boolean;
}

interface IPrice {
  id:                 string;
  name:               string;
  symbol:             string;
  rank:               number;
  circulating_supply: number;
  total_supply:       number;
  max_supply:         number;
  beta_value:         number;
  first_data_at:      Date;
  last_updated:       Date;
}


const CoinDetail = () => {
  const [coinInfo, setCoinInfo] = useState<IInfo>();
  const [coinPrice, setCoinPrice] = useState<IPrice>();
  const location = useLocation<locationState>();
  const { state } = location;

  useEffect(() => {
    const fetchCoin = async () => {
      const coinInfoResponse = await fetch(
        `https://api.coinpaprika.com/v1/coins/${state.id}`
      );
      const coinInfoResult = await coinInfoResponse.json();

      const coinPriceResponse = await fetch(`https://api.coinpaprika.com/v1/tickers/${state.id}`);
      const coinPriceResult = await coinPriceResponse.json();
      setCoinInfo(coinInfoResult);
      setCoinPrice(coinPriceResult);
    };
    fetchCoin();
  }, [state.id]);


  return (
    <Container>
      <h1>{state.name}</h1>
      <Card>
        <div>
          <p>RANK:</p>
          <p>{coinInfo?.rank}</p>
        </div>
        <div>
          <p>SYMBOL:</p>
          <p>{coinInfo?.symbol}</p>
        </div>
        <div>
          <p>OPEN SOURCE:</p>
          <p>{coinInfo?.open_source ? 'Yes' : 'No'}</p>
        </div>
      </Card>
      <Description>{coinInfo?.description}</Description>
      <Card>
        <div>
          <p>TOTAL SUPLY:</p>
          <p>{coinPrice?.total_supply}</p>
        </div>
        <div>
          <p>MAX SUPPLY:</p>
          <p>{coinPrice?.max_supply}</p>
        </div>
      </Card>
    </Container>
  );
};

export default CoinDetail;
