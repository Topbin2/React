import { useQuery } from "react-query";
import {
  Switch,
  useLocation,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import styled from "styled-components";

import { fetchCoinInfo, fetchCoinPrice } from "../api";
import Chart from "./Chart";
import Price from "./Price";

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
`;

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

const ChartContainer = styled.div`
  display: flex;
  width: 55%;
  cursor: pointer;
  a {
    margin: 0 auto;
  }
`;

const Tap = styled.p<{ isActive: boolean }>`
  color: ${(props) =>
    props.isActive ? props.theme.accentColor : props.theme.textColor};
`;

interface locationState {
  name: string;
  id: string;
}

interface IInfo {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  description: string;
  open_source: boolean;
}

interface IPrice {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: Date;
  last_updated: Date;
}

interface ICoinId {
  coinId: string;
}

const CoinDetail = () => {
  const { coinId } = useParams<ICoinId>();
  const { state } = useLocation<locationState>();
  const chartMatch = useRouteMatch(`/${coinId}/chart`);
  const priceMatch = useRouteMatch(`/${coinId}/price`);

  const { data: coinInfoData, isLoading: coinInfoIsLoading } = useQuery<IInfo>(
    ["coinInfo", coinId],
    () => fetchCoinInfo(coinId)
  );

  const { data: coinPriceData, isLoading: coinPriceIsLoading } =
    useQuery<IPrice>(["coinPrice", coinId], () => fetchCoinPrice(coinId));

  if (coinInfoIsLoading || coinPriceIsLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <Container>
      <h1>{state.name}</h1>
      <Card>
        <div>
          <p>RANK:</p>
          <p>{coinInfoData?.rank}</p>
        </div>
        <div>
          <p>SYMBOL:</p>
          <p>{coinInfoData?.symbol}</p>
        </div>
        <div>
          <p>OPEN SOURCE:</p>
          <p>{coinInfoData?.open_source ? "Yes" : "No"}</p>
        </div>
      </Card>
      <Description>{coinInfoData?.description}</Description>
      <Card>
        <div>
          <p>TOTAL SUPLY:</p>
          <p>{coinPriceData?.total_supply}</p>
        </div>
        <div>
          <p>MAX SUPPLY:</p>
          <p>{coinPriceData?.max_supply}</p>
        </div>
      </Card>
      <ChartContainer>
        <Card>
          <Link
            to={{
              pathname: `/${coinId}/chart`,
              state: { name: state.name },
            }}
          >
            <Tap isActive={chartMatch !== null}>Chart</Tap>
          </Link>
        </Card>
        <Card>
          <Link
            to={{
              pathname: `/${coinId}/price`,
              state: { name: state.name },
            }}
          >
            <Tap isActive={priceMatch !== null}>Price</Tap>
          </Link>
        </Card>
      </ChartContainer>

      <Switch>
        <Route path={`/:chartId/chart`}>
          <Chart />
        </Route>
        <Route path={`/:chartId/price`}>
          <Price />
        </Route>
      </Switch>
    </Container>
  );
};

export default CoinDetail;
