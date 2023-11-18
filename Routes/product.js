const express = require("express");
const page = require("../Controllers/page");

const router = express();

router.get("/product", page("product.html"));

module.exports = router;
