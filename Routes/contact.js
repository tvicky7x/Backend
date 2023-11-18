const express = require("express");
const page = require("../Controllers/page");
const router = express();

router.get("/contact", page("contact.html"));

module.exports = router;
