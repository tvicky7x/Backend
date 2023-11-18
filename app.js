const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");

const indexRouter = require("./Routes/index");
const productRouter = require("./Routes/product");
const contactRouter = require("./Routes/contact");
const successRouter = require("./Routes/success");
const errorRouter = require("./Routes/error");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "Public")));

app.use(indexRouter);
app.use(productRouter);
app.use(contactRouter);
app.use(successRouter);
app.use(errorRouter);

app.listen(3000);
