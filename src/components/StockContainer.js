import React from "react";
import Stock from "./Stock";

function StockContainer({ stockDisplay, addStock }) {
  
  const mapStocks = stockDisplay.map((stock) => (
    <Stock 
      key={stock.id}
      stock={stock}
      handleNewCard={addStock}
    />
  ));

  return (
    <div>
      <h2>Stocks</h2>
      {mapStocks}
    </div>
  );
}

export default StockContainer;
