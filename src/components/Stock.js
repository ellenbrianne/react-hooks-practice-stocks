import React from "react";

function Stock({ stock, handleNewCard }) {

  function handleCardClick () {
    handleNewCard(stock);
  };

  return (
    <div onClick={handleCardClick}>
      <div className="card" >
        <div className="card-body">
          <h5 className="card-title">{stock.name}</h5>
          <p className="card-text">{stock.price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
