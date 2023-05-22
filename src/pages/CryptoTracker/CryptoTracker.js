import React, { useEffect, useState } from "react";
import axios from 'axios';
import "./CryptoTracker.css";
import Coin from "./Coin"
export default function Login() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');
  useEffect(()=>{
    axios
    .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en')
    .then(res=>{
      setCoins(res.data);
      console.log(res.data);
    })
    .catch(error =>{ console.log(error);})
  },[]);
  const handleChange=e=>{
    setSearch(e.target.value);
  }
  const filteredCoins = coins.filter(coin=>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="crypto">
      <div className="crypto-search">
        <h1 className="crypto-text"> Search a Currency</h1>
        <form>
          <input type="text" placeholder="Search.." className="crypto-input" onChange={handleChange}/>
        </form>
      </div>
      {filteredCoins.map(coin=>{
        return (
            <Coin 
            key={coin.id} 
            name = {coin.name} 
            image = {coin.image} 
            symbol = {coin.symbol}
            volume = {coin.total_volume}
            price = {coin.current_price}
            priceChange = {coin.price_change_percentage_24h}
            marketcap = {coin.marketcap}
            />
          
        )
          
      })}
    </div>
  );
}