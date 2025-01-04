import { useState } from "react";
import { useEffect } from "react";


const Fetch = () => {
  const [btcData, setBtcData] = useState({})

  const fetchData = () => {
    fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
    .then((response) => response.json())
    .then((data) => {
        setBtcData(data.bpi.USD);
        console.log("Data Fetched!")
    })
    .catch((error) => console.log(error));
  }

  useEffect(() => {
    const intervalId = setTimeout(fetchData, 5000);
    return () => 
        {
            clearTimeout(intervalId);
        }
  }, []);

  return Object.keys(btcData).length > 0 ? (
    <div>
      <h1> Current BTC/USD data</h1>
      <p>Code: {btcData.code}</p>
      <p>Symbol: {btcData.symbol}</p>
      <p>Rate: {btcData.rate}</p>
      <p>Description: {btcData.description}</p>
      <p>Rate_float:  {btcData.rate_float}</p>
    </div>
  ) :
  (<div>
    <h1> Current BTC/USD data</h1>
    <p>Fetching data...</p>
  </div>)
}

export default Fetch;