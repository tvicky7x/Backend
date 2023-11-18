const express = require("express");

const page = require("../Controllers/page");

const router = express();

router.get("/", page("index.html"));

module.exports = router;
