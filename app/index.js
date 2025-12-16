const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("👋 Hello World from CI (GitHub Actions)!");
});

app.get("/healthz", (req, res) => {
  res.json({ status: "ok" });
});

app.listen(3000, () => {
  console.log("App running on port 3000");
});
