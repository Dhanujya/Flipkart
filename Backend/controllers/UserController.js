import User from "../models/userSchema.js";
import bcrypt from "bcrypt";


export const Signup=async(req,res)=>{
    const{username,email,password}=req.body;
    console.log(username, email,password);
    if(!username || !email || !password){
        return res.status(200).json({message:"Enter all details"});
    }
    const isexist=await User.findOne({username});
    if(isexist){
        return res.status(409).json({message:"Username alreay exists"})
    }
    
        const hashpass=await bcrypt.hash(password,10);
        const newUser=new User({
            username:username,
            email:email,
            password:hashpass
        })
        await newUser.save();
        return res.status(200).json({message:"User Created successfully"});
    

}

export const Login=async(req,res)=>{
    const {username,password}=req.body;
    const users= await User.findOne({username});
    console.log(username);
    console.log(password);
    if(!users){
        return res.status(404).json({message:"User not found"});
    }
    const pass=await bcrypt.compare(password,users.password);
    if(!pass){
        return res.status(404).json({message:"Incorrect Password"});
    }
    return res.status(200).json({message:"User Logged in successfully"});

}