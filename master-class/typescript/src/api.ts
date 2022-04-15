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