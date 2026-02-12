const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/health", (req, res) => {
  res.json({
    status: "OK",
    environment: process.env.NODE_ENV,
  });
});

app.get("/version", (req, res) => {
  res.json({
    version: process.env.APP_VERSION,
  });
});

app.get("/info", (req, res) => {
  res.json({
    app: "Cloud Health API",
    author: "Eranga Madhushan",
  });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;
