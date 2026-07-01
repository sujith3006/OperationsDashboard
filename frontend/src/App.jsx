import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [crypto, setCrypto] = useState(null);
  const [forex, setForex] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/crypto")
      .then((res) => setCrypto(res.data))
      .catch(console.error);

    axios.get("http://localhost:5000/api/forex")
      .then((res) => setForex(res.data))
      .catch(console.error);
  }, []);

  if (!crypto || !forex) {
    return <h2>Loading Dashboard...</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Operations Dashboard</h1>

      <div
        style={{
          border: "1px solid gray",
          padding: "20px",
          marginBottom: "20px"
        }}
      >
        <h2>Crypto Widget</h2>

        <p>Bitcoin: ${crypto.prices.bitcoin.usd}</p>
        <p>Ethereum: ${crypto.prices.ethereum.usd}</p>

        <p>
          Last Updated:
          {" "}
          {new Date(crypto.updatedAt).toLocaleString()}
        </p>
      </div>

      <div
        style={{
          border: "1px solid gray",
          padding: "20px"
        }}
      >
        <h2>Forex Widget</h2>

        <p>USD → INR : {forex.rates.INR}</p>
        <p>USD → EUR : {forex.rates.EUR}</p>
        <p>USD → GBP : {forex.rates.GBP}</p>

        <p>
          Last Updated:
          {" "}
          {new Date(forex.updatedAt).toLocaleString()}
        </p>
      </div>
    </div>
  );
}

export default App;