const express = require("express");

const router = express.Router();

const {
  getCrypto
} = require("../controllers/coingeckoController");

const {
  getForex
} = require("../controllers/forexController");

const {
  getWeather
} = require("../controllers/weatherController");

router.get("/crypto", getCrypto);
router.get("/forex", getForex);
router.get("/weather", getWeather);

module.exports = router;