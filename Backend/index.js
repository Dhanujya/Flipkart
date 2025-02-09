import express from "express";
import UserRouter from "./routes/UserRouter.js";
import  dotenv  from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import ProductRouter from "./routes/ProductsRouter.js";
import cartRouter from "./routes/cartRouter.js";
const app=express();
dotenv.config();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static("public"));
app.use(cors());
const dbUrl=process.env.MONGO_URL;
const PORT = process.env.PORT || 5000;
main()
.then(res=>console.log("mongoose connected"))
.catch((err)=>console.log(err));
app.listen(PORT,(req,res)=>{
    console.log("server is listening ");
})
app.get("/",(req,res)=>{
    res.send("Backend is connected");
})
app.use(UserRouter);
app.use(ProductRouter);
app.use(cartRouter)
async function main(){
    await mongoose.connect(dbUrl,{useNewUrlParser:true, useUnifiedTopology:true})
}