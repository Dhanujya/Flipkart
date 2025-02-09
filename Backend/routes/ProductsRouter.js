import express from "express";
import { productByName, ProductController } from "../controllers/ProductController.js"
const ProductRouter=express.Router()
ProductRouter.get("/products",ProductController);
ProductRouter.get("/products/:category",productByName)

export default ProductRouter;