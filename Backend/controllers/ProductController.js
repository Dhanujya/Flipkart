import { products } from "../Data/data.js"
import Product from "../models/productSchema.js"

export const ProductController=async(req,res)=>{
    try{
        await Product.deleteMany({});
        await Product.insertMany(products);
        return res.status(200).json({message:"Data inserted"});
    }
    catch(e){
        console.log(e);
        return res.status(404).json({message:"Data not found"});
    }
    

}

export const productByName=async(req,res)=>{
    try{
        const {category}=req.params;
        // console.log(category);
    if(!category){
        return res.status(404).json({message:'Enter Category'});
    }
    const ProductLists=await Product.find({category});
    if(!ProductLists){
        return res.status(404).json({message:"Enter Correct Category"});
    }
    // console.log(ProductLists);
    return res.status(200).json({message:`${category} Results!!`,ProductLists});
    }
    catch(err){
        console.log(err);
        return res.status(404).json({message:"data not found"});
    }
}