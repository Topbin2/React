const BASE_URL = 'https://api.coinpaprika.com/v1';

export const fetchCoins = async () => {
  const response = await fetch(`${BASE_URL}/coins`);
  const result = await response.json();
  return result.slice(0, 50);
};

export const fetchCoinInfo = async (coinId: string) => {
  const response = await fetch(`${BASE_URL}/coins/${coinId}`);
  const result = await response.json();
  return result;
};

export const fetchCoinTickers = async (coinId: string) => {
  const response = await fetch(`${BASE_URL}/tickers/${coinId}`);
  const result = await response.json();
  return result;
};

export const fetchCoinHistory = async (coinId: string) => {
  const endDate = Math.floor(Date.now() / 1000);
  const startDate = endDate - (60 * 60 * 24 * 7 * 2);
  const response = await fetch(`${BASE_URL}/coins/${coinId}/ohlcv/historical?start=${startDate}&end=${endDate}`);
  const result = await response.json();
  return result;
}