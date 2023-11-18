const express = require("express");
const path = require("path");

const rootDir = require("./path");

const router = express();

router.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "view", "index.html"));
});

module.exports = router;
