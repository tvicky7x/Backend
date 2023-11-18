const express = require("express");
const path = require("path");
const rootDir = require("./path");

const router = express();

router.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "view", "error.html"));
});

module.exports = router;
