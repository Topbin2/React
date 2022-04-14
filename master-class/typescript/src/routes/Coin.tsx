import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router";
import styled from "styled-components";

const Container = styled.div`
  padding: 0px 20px;
`;

const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.p`
  text-align: center;
`;

interface RouteParams {
  coinId: string;
}

interface RouteState {
  name: string;
}

function Coin() {
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState({});
  const [priceInfo, setPriceInfo] = useState({});
  const { coinId } = useParams<RouteParams>();
  const { state } = useLocation<RouteState>();

  useEffect(() => {
    const fetchData = async () => {
      const responseInfo = await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`);
      const infoData = await responseInfo.json();

      const responsePrice = await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`);
      const priceData = await responsePrice.json();

      setInfo(infoData);
      setPriceInfo(priceData)
    }
    fetchData();
  }, [])

  return (
    <Container>
      <Header>
        <Title>{state?.name || "Loading"}</Title>
      </Header>
      {loading ? <Loader>Loading...</Loader> : null}
    </Container>
  );
}
export default Coin;
