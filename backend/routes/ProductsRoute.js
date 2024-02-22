import express from "express";
import { deleteProduct, getDetailsProduct, getProducts, postProduct, putProduct } from "../controllers/ProductsController";

const router = express.Router();

router.get("/products", getProducts);
router.get("/products/:id", getDetailsProduct);
router.post("/products", postProduct);
router.put("/products/:id", putProduct);
router.delete("/products/:id", deleteProduct);


export default router;