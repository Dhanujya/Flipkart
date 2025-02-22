import Cart  from "../models/cartSchema.js";
import Product from "../models/productSchema.js";

export const cartController=async(req,res)=>{
    try{
        const {id}=req.params;
        console.log(id);
        const productitem=await Product.findById(id);
        console.log(productitem);
        const title=productitem.title;
        console.log(title);
        const existing=await Cart.findOne({title});
        console.log(existing);
        if(existing){
            return res.status(404).json({message:"Item aready added"});
        }
        const addCart=new Cart({
            title:productitem.title,
            quantity:1,
            image:productitem.image,
            price:productitem.price
        });
        console.log(addCart);
        await addCart.save();
        console.log(addCart);
        return res.status(200).json({message:"Added to Cart",addCart});


    }
    catch(err){
        return res.status(404).json({message:"404 Error",err})
    }
}
export const FetchData=async(req,res)=>{
    try{
        const CartDatas= await Cart.find({});
        return res.status(200).json({message:"Data Fetched Sucessfully",CartDatas});
    }catch(err){
        console.log(err);
        return res.status(404).json({message:"Data not found",err});
    }
}

  
export const Deletecart=async(req,res)=>{
    try{
        const {id}=req.params;
        await Cart.findByIdAndDelete(id);
        return res.status(200).json({message:"Deleted successfully"})

    }
    catch(err){
        res.status(404).json({message:"404 Error occured"});
    }
}