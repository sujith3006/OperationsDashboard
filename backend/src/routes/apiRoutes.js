const express = require("express");

const router = express.Router();

const {
  getCrypto
} = require("../controllers/coingeckoController");

const {
  getForex
} = require("../controllers/forexController");

router.get("/crypto", getCrypto);
router.get("/forex", getForex);

module.exports = router;