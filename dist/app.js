import adminRouter from "./Routes/admin.js";
import shopRouter from "./Routes/shop.js";
import path from "path";
import express from "express";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// const adminData = require('./routes/admin');
// const shopRouter = require('./routes/shop');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/admin", adminRouter);
app.use("/", shopRouter);
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});
// "type": "module",
app.listen(3000, () => {
  console.log("Server Listening on Port 3000");
});
