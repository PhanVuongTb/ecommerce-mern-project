import express from "express";
import dotenv from "dotenv";
import cors from "cors";
require("colors");
import connectDb from "./config/config";
import {errorHandler} from "./middlewares/errorMiddleware"

import productRoutes from "./routes/ProductsRoute"
import userRoutes from "./routes/UsersRoute"
import authRoutes from "./routes/AuthRouter"

dotenv.config();
const app = express();
//middleware bodyparser
app.use(express.json());
app.use(cors());


//connecting to mongodb database
connectDb();

//dotenv config
app.get("/", (req, res) => {
  res.send("<h1>Welcome to Node Server</h1>");
});

app.use("/api", productRoutes);
app.use("/api", userRoutes);
app.use("/api", authRoutes);

app.use(errorHandler);

const PORT = 8080;
app.listen(process.env.PORT, () => {
    console.log(
    `Server Running in ${process.env.NODE_ENV} Mode on Port ${process.env.PORT}`
      .inverse
  );
});