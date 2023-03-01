import path from "path";

import express, { Request, Response, NextFunction } from "express";

const shopRouter = express.Router();

shopRouter.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
});
console.log("here");

export default shopRouter;
