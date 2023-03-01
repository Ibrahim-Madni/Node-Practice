"use strict";
exports.__esModule = true;
var express_1 = require("express");
var adminRouter = express_1["default"].Router();
adminRouter.use("/addproduct", function (req, res, next) {
  console.log("In another middleware");
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></input></form>'
  );
});
adminRouter.post("/product", function (req, res, next) {
  console.log(req.body);
  res.redirect("/");
});
exports["default"] = adminRouter;
