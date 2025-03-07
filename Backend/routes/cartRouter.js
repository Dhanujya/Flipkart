import express from "express";
import { cartController, Deletecart, FetchData } from "../controllers/cartController.js";
const cartRouter=express.Router();
cartRouter.get('/cart',FetchData);
cartRouter.post("/cart/:id",cartController)
cartRouter.delete("/cart/:id",Deletecart)
export default cartRouter