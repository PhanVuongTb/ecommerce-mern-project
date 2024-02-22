import Product from "../models/ProductModel"
import asyncHandler from "express-async-handler"

export const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({})
  // throw new Error("Some Eror");
  if (products) {
    res.json(products);
  } else {
    res.status(404).json({ message: "Product Not Found" });
  }
})

export const getDetailsProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product Not Found" });
  }
});

export const postProduct = async (req, res) => { 
      try {
        const products = await Product(req.body).save();
        res.json(products)
    } catch (error) {
        res.json({ message: "Product Not Post" })
    }
}

export const putProduct = async (req, res) => {
    try {
        const products = await Product.find().findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }).exec();
        res.json(products)
    } catch (error) {
        res.json({ message: "Product Not Put" })
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const products = await Product.findOneAndDelete({ _id: req.params.id }).exec();
        res.json(products)
    } catch (error) {
        res.json({ message: "Product Not Delete" })
    }
}