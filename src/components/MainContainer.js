import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [allStocks, setAllStocks] = useState([]);
  const [myPortfolio, setMyPortfolio] = useState([]);
  const [stockDisplay, setStockDisplay] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
    .then(r => r.json())
    .then(stocks => {
      setAllStocks(stocks)
      setStockDisplay(stocks)
    })
  }, []);

  function addStock (stockToAdd) {
    const filteredPortfolio = myPortfolio.find(
      s => s.id === stockToAdd.id
    )
    if (!filteredPortfolio) {
      setMyPortfolio([ ...myPortfolio, stockToAdd])
    }
  };

  function handleRemove (stockToRemove) {
    setMyPortfolio((p) =>
      p.filter((s) => s.id !== stockToRemove.id)
    )
  };

  function handleSearchBar (value) {
    if (value === "Alphabetically") {
      const sortedName = allStocks.toSorted((a, b) => {
        if (a.name > b.name) return +1;
        if (a.name < b.name) return -1;
        else return 0;
    });
    setStockDisplay(sortedName);
    } else if (value === "Price") {
      const sortedPrice = allStocks.toSorted((a,b) => {
        if (a.price > b.price) return +1;
        if (a.price < b.price) return -1; 
        return 0;
      });
      setStockDisplay(sortedPrice);
    } else {
      const filteredVal = allStocks.filter(s => {
        return s.type === value;
      });
      setStockDisplay(filteredVal);
    };
  };

  return (
    <div>
      <SearchBar handleSearchBar={handleSearchBar} />
      <div className="row">
        <div className="col-8">
          <StockContainer 
            addStock={addStock}
            stockDisplay={stockDisplay} 
          />
        </div>
        <div className="col-4">
          <PortfolioContainer 
            myPortfolio={myPortfolio}
            handleRemove={handleRemove}  
          />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
