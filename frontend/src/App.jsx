import { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const [crypto, setCrypto] = useState(null);

  useEffect(() => {

    axios
      .get("http://localhost:5000/api/crypto")
      .then((res) => {
        setCrypto(res.data);
      })
      .catch((err) => {
        console.error(err);
      });

  }, []);

  if (!crypto) {
    return <h2>Loading...</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>

      <h1>Operations Dashboard</h1>

      <div
        style={{
          border: "1px solid gray",
          padding: "20px",
          marginTop: "20px"
        }}
      >
        <h2>Crypto Widget</h2>

        <p>
          Bitcoin:
          ${crypto.prices.bitcoin.usd}
        </p>

        <p>
          Ethereum:
          ${crypto.prices.ethereum.usd}
        </p>

        <p>
          Last Updated:
          {new Date(
            crypto.updatedAt
          ).toLocaleString()}
        </p>

      </div>

    </div>
  );
}

export default App;