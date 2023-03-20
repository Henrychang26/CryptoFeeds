import axios from "axios";

const BASE_URL = "https://api.coingecko.com/api/v3";

export const fetchTopCryptoCurrencies = async () => {
  const response = await axios.get(`${BASE_URL}/coins/markets`, {
    params: {
      vs_currency: "usd",
      order: "market_cap_desc",
      per_page: "10",
      page: "1",
    },
  });
  console.log(response);
  return response.data;
};
