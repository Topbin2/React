import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";

interface ChartProps {
  coinId: string;
}

interface ChartHistory {
  time_open:  Date;
  time_close: Date;
  open:       number;
  high:       number;
  low:        number;
  close:      number;
  volume:     number;
  market_cap: number;
}


const Chart = ({ coinId }: ChartProps) => {
  const { data, isLoading } = useQuery<ChartHistory>(["ohlcv", coinId], () => fetchCoinHistory(coinId));

  console.log(data);
  
  return (
    <h1>
      Chart
    </h1>
  );
};

export default Chart;