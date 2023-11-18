const express = require("express");
const path = require("path");

const rootDir = require("./path");
const router = express();

router.get("/contact", (req, res, next) => {
  res.sendFile(path.join(rootDir, "view", "contact.html"));
});

module.exports = router;
