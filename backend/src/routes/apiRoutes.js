const express = require("express");

const router = express.Router();

const {
  getCrypto
} = require("../controllers/coingeckoController");

router.get("/crypto", getCrypto);

module.exports = router;