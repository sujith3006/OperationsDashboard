const axios = require("axios");

const getForex = async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.frankfurter.app/latest?from=USD&to=INR,EUR,GBP"
    );

    res.json({
      rates: response.data.rates,
      updatedAt: new Date()
    });

  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch forex data"
    });
  }
};

module.exports = {
  getForex
};