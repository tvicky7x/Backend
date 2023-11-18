const express = require("express");
const path = require("path");

const router = express();

router.get("/contact", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "view", "contact.html"));
});

module.exports = router;
