const express = require("express");
const page = require("../Controllers/page");

const router = express();

router.post("/success", page("success.html"));

module.exports = router;
