import { useQuery } from "react-query";
import { fetchTopCryptoCurrencies } from "./api";
import { useState } from "react";
import TokenCard from "./TokenCard";
import { Token } from "./types";

const TopCryptoCurrencies = () => {
  const [searchWord, setSearchWord] = useState<string>("");
  const [list, setList] = useState<Token[]>([]);

  const { data, isLoading } = useQuery(
    "topCryptoCurrencies",
    fetchTopCryptoCurrencies,
    {
      refetchInterval: 60000, // refetch every 1 minute
    }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const filteredCoins = data.filter((coin: Token) => {
    return coin.name.toLowerCase().includes(searchWord.toLowerCase());
  });

  const addToList = (token: Token) => {
    console.log(list);
    if (!list.includes(token)) {
      setList([...list, token]);
    } else {
      setList([...list.filter((item) => item !== token)]);
    }
  };

  const removeFromList = (token: Token) => {
    setList([...list.filter((item) => item !== token)]);
  };

  return (
    <div>
      <h1>Top 10 Crypto Currencies</h1>
      <input
        type="text"
        placeholder="Search Coins"
        onChange={(event) => {
          setSearchWord(event.target.value);
        }}
      />
      <div>
        <TokenCard name="Top 10 Crypto Currencies">
          {filteredCoins.map((currency: Token) => (
            <div
              key={currency.market_cap_rank}
              onClick={() => addToList(currency)}
            >
              <img src={currency.image} width={100} />
              {currency.name} - {currency.current_price} {currency.symbol}
              <button>+</button>
            </div>
          ))}
        </TokenCard>
        <TokenCard name="Watch List">
          {list.map((currency: Token) => (
            <div
              key={currency.market_cap_rank}
              onClick={() => removeFromList(currency)}
            >
              <img src={currency.image} width={100} />
              {currency.name} - {currency.current_price} {currency.symbol}
              <button>-</button>
            </div>
          ))}
        </TokenCard>
      </div>
    </div>
  );
};

export default TopCryptoCurrencies;
