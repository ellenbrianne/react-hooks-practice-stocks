import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ myPortfolio, handleRemove }) {

  const portfolioCards = myPortfolio.map(card => (
    <Stock  
      key={card.id}
      stock={card}
      handleNewCard={handleRemove}
    />
  ));

  return (
    <div>
      <h2>My Portfolio</h2>
      {portfolioCards}
    </div>
  );
}

export default PortfolioContainer;
