const axios = require("axios");

const getCrypto = async (req, res) => {
  try {

    const response = await axios.get(
      "https://api.coingecko.com/api/v3/simple/price",
      {
        params: {
          ids: "bitcoin,ethereum",
          vs_currencies: "usd"
        },
        headers: {
          accept: "application/json"
        }
      }
    );

    res.json({
      prices: response.data,
      updatedAt: new Date()
    });

  } catch (error) {

    console.log(error.message);

    res.status(500).json({
      message: "Failed to fetch crypto data"
    });
  }
};

module.exports = {
  getCrypto
};