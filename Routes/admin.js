const express = require("express");

const router = express();

router.get("/product", (req, res, next) => {
  res.send(
    '<form action="/admin/product" method="POST"><input type="text" name="product"><button type="submit">Add Product</button></form>'
  );
});

router.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;