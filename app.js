const bodyParser = require("body-parser");
const express = require("express");

const shopRouter = require("./Routes/shop");
const adminRouter = require("./Routes/admin");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(shopRouter);
app.use("/admin", adminRouter);

app.use((req, res, next) => {
  res.status(404).send("<h1>Page not found</h1>");
});

app.listen(3000);
