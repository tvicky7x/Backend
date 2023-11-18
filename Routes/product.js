const express = require("express");
const path = require("path");
const rootDir = require("./path");

const router = express();

router.get("/product", (req, res, next) => {
  res.sendFile(path.join(rootDir, "view", "product.html"));
});

module.exports = router;
