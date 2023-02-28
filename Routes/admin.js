import express from "express";

const adminRouter = express.Router();

adminRouter.use("/addproduct", (req, res, next) => {
  console.log("In another middleware");
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></input></form>'
  );
});

adminRouter.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

export default adminRouter;
