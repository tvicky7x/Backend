const express = require("express");
const path = require("path");

const router = express();

router.get("/product", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "view", "product.html"));
});

module.exports = router;
