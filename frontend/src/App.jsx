import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [crypto, setCrypto] = useState(null);
  const [forex, setForex] = useState(null);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/crypto")
      .then((res) => setCrypto(res.data))
      .catch((err) => console.error(err));

    axios
      .get("http://localhost:5000/api/forex")
      .then((res) => setForex(res.data))
      .catch((err) => console.error(err));

    axios
      .get("http://localhost:5000/api/weather")
      .then((res) => setWeather(res.data))
      .catch((err) => console.error(err));
  }, []);

  if (!crypto || !forex || !weather) {
    return <h2>Loading Dashboard...</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Operations Dashboard</h1>

      {/* Crypto Widget */}
      <div
        style={{
          border: "1px solid gray",
          padding: "20px",
          marginBottom: "20px",
        }}
      >
        <h2>Crypto Widget</h2>

        <p>Bitcoin: ${crypto.prices.bitcoin.usd}</p>
        <p>Ethereum: ${crypto.prices.ethereum.usd}</p>

        <p>
          Last Updated:{" "}
          {new Date(crypto.updatedAt).toLocaleString()}
        </p>
      </div>

      {/* Forex Widget */}
      <div
        style={{
          border: "1px solid gray",
          padding: "20px",
          marginBottom: "20px",
        }}
      >
        <h2>Forex Widget</h2>

        <p>USD → INR : {forex.rates.INR}</p>
        <p>USD → EUR : {forex.rates.EUR}</p>
        <p>USD → GBP : {forex.rates.GBP}</p>

        <p>
          Last Updated:{" "}
          {new Date(forex.updatedAt).toLocaleString()}
        </p>
      </div>

      {/* Weather Widget */}
      <div
        style={{
          border: "1px solid gray",
          padding: "20px",
        }}
      >
        <h2>Weather Widget</h2>

        <p>
          Temperature: {weather.weather.temperature_2m}°C
        </p>

        <p>
          Wind Speed: {weather.weather.wind_speed_10m} km/h
        </p>

        <p>
          Last Updated:{" "}
          {new Date(weather.updatedAt).toLocaleString()}
        </p>
      </div>
    </div>
  );
}

export default App;