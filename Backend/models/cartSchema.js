import mongoose from "mongoose";
const cartSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }

})
const Cart=mongoose.model("Cart",cartSchema);
export default Cart;