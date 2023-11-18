const express = require("express");
const path = require("path");
const rootDir = require("./path");

const router = express();

router.post("/success", (req, res, next) => {
  console.log(req.body);
  res.sendFile(path.join(rootDir, "view", "success.html"));
});

module.exports = router;
