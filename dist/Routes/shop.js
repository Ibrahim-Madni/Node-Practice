import path from "path";
import express from "express";
const shopRouter = express.Router();
shopRouter.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
});
console.log("here");
export default shopRouter;
