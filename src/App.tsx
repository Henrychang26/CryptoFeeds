import React from "react";

import "./App.css";
import TopCryptoCurrencies from "./components/TopCryptoCurrencies";
import { QueryClient, QueryClientProvider } from "react-query";
import { Favorites } from "./components/Favorites";

function App() {
  const queryClient = new QueryClient();

  return (
    <div className="App">
      <img
        src="https://www.freecodecamp.org/news/content/images/2022/04/featured.jpg"
        alt=""
      />
      <QueryClientProvider client={queryClient}>
        <TopCryptoCurrencies />
        <Favorites />
      </QueryClientProvider>
    </div>
  );
}

export default App;
