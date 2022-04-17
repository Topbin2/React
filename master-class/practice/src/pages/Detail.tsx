import { useLocation } from "react-router-dom";

interface locationState {
  name: string;
  id: string;
}

const Detail = () => {
  const location = useLocation<locationState>();

  const { state } = location;

  return (
    <>
      <h1>{state.name}</h1>
      <div>{state.id}</div>
    </>
  );
};

export default Detail;
