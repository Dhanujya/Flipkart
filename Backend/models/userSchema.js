import mongoose from "mongoose";
const UserSchema=mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String
    },
    password:{
        type:String,
        required:true
    }
})
const User=mongoose.model("User",UserSchema)
export default User;
