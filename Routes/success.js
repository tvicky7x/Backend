const express = require("express");
const path = require("path");

const router = express();

router.post("/success", (req, res, next) => {
  console.log(req.body);
  res.sendFile(path.join(__dirname, "../", "view", "success.html"));
});

module.exports = router;
