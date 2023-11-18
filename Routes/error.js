const express = require("express");
const path = require("path");

const router = express();

router.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "view", "error.html"));
});

module.exports = router;
