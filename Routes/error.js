const express = require("express");
const page = require("../Controllers/page");

const router = express();

router.use(page("error.html"));

module.exports = router;
