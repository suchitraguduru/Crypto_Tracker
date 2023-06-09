import React, { useState } from "react";
import "./Coin.css";
export default function Coin({name,image,symbol,price,volume,priceChange,marketcap}) {
  return (
    <div className="coin">
      <div className="coin-row">
        <div className="minicoin">
          <img src={image} alt = "crypto" />
          <h1>{name}</h1>
          <p className="coin-symbol">{symbol}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">${price}</p>
          <p className="coin-volume">${volume}</p>
          {priceChange>0?
            (
              <p className='coin-percent red'>{priceChange.toFixed(2)}%</p>
            ) : (
              <p className='coin-percent green'>{priceChange.toFixed(2)}%</p>
            )}
            <p className='coin-marketcap'>
            Mkt Cap: ${marketcap}
          </p>
        </div>
      </div>
    </div>
  );
}
