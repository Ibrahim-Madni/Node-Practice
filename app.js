"use strict";
exports.__esModule = true;
var admin_1 = require("./Routes/admin");
var shop_1 = require("./Routes/shop");
var path_1 = require("path");
var express_1 = require("express");
var body_parser_1 = require("body-parser");
var url_1 = require("url");
var app = (0, express_1["default"])();
var __filename = (0, url_1.fileURLToPath)(import.meta.url);
var __dirname = path_1["default"].dirname(__filename);
// const adminData = require('./routes/admin');
// const shopRouter = require('./routes/shop');
app.use(body_parser_1["default"].urlencoded({ extended: false }));
app.use(
  express_1["default"].static(path_1["default"].join(__dirname, "public"))
);
app.use("/admin", admin_1["default"]);
app.use("/", shop_1["default"]);
app.use(function (req, res, next) {
  res
    .status(404)
    .sendFile(path_1["default"].join(__dirname, "views", "404.html"));
});
// "type": "module",
app.listen(3000, function () {
  console.log("Server Listening on Port 3000");
});
