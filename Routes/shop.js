"use strict";
exports.__esModule = true;
var path_1 = require("path");
var express_1 = require("express");
var shopRouter = express_1["default"].Router();
shopRouter.get("/", function (req, res, next) {
  res.sendFile(path_1["default"].join(__dirname, "../", "views", "shop.html"));
});
console.log("here");
exports["default"] = shopRouter;
