import express from "express";
import dotenv from "dotenv"
import cors from "cors";
require("colors");
// import connectDb from "./config/config";
import products from "./data/products"

dotenv.config();
const app = express();
//middleware bodyparser
app.use(express.json())
app.use(cors());

//connecting to mongodb database
// connectDb();

//dotenv config
app.get("/", (req, res) => {
  res.send("<h1>Welcome to Node Server</h1>");
});

app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/products/:id", (req, res) => {
    const product = products.find(p => p._id === req.params.id)
    res.json(product);
});


const PORT = 8080;
app.listen(process.env.PORT || PORT, () => {
  console.log(
    `Server Running in ${process.env.NODE_ENV} Mode on Port ${process.env.PORT}`
      .inverse
  );
});