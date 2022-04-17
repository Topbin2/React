import { useLocation } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    margin: 3.5rem 0;
    font-size: 4rem;
    font-weight: 400;
    color: ${(props) => props.theme.accentColor};
  }
`;

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
      margin: 0.2rem;
    }
  }
`;

interface locationState {
  name: string;
  id: string;
}

const CoinDetail = () => {
  const location = useLocation<locationState>();

  const { state } = location;

  return (
    <Container>
      <h1>{state.name}</h1>
      <Card>
        <div>
          <p>RANK:</p>
          <p>1</p>
        </div>
        <div>
          <p>SYMBOL:</p>
          <p>$BTC</p>
        </div>
        <div>
          <p>OPEN SOURCE:</p>
          <p>Yes</p>
        </div>
      </Card>
    </Container>
  );
};

export default CoinDetail;
