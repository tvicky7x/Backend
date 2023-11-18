const express = require("express");
const path = require("path");

const router = express();

router.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "view", "index.html"));
});

module.exports = router;
