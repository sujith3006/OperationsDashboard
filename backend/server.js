require("dotenv").config();

const express = require("express");
const cors = require("cors");

const apiRoutes = require("./src/routes/apiRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", apiRoutes);

app.get("/", (req, res) => {
  res.send("Operations Dashboard Backend Running");
});

app.get("/health", (req, res) => {
  res.json({
    status: "healthy"
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});