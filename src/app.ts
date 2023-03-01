import adminRouter from "../Routes/admin";
import shopRouter from "../Routes/shop";
import path from "path";
import express, { Request, Response, NextFunction } from "express";
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

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});
// "type": "module",
app.listen(3000, () => {
  console.log("Server Listening on Port 3000");
});
