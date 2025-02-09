import User from "../models/userSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"


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
    try{
        const {username,password}=req.body;
        const users= await User.findOne({username});
        // console.log(username);
        // console.log(password);
        if(!users){
            return res.status(404).json({message:"User not found"});
        }
        const pass=await bcrypt.compare(password,users.password);
        if(!pass){
            return res.status(404).json({message:"Incorrect Password"});
        }
        const token=jwt.sign({username:username},process.env.SECRET_KEY,{
            expiresIn:"1h"
        });
        const loguser={
            id:users._id,
            username:users.username,
            token:token
        }
        return res.status(200).json({message:"User Logged in successfully",loguser});

    }
    catch(err){
        return res.status(404).json({message:"Login failed"});
    }

}

export const VerifyEmail=async(req,res)=>{
    const {email}=req.body;
    if(!email){
        return res.status(404).json({message:"Enter email Id"})
    }
    const user=await User.find({email});
    if(!user){
        return res.status(404).json({message:"Entered email does not exist"});
    }
    return res.status(200).json({message:"Entered otp Verified"});

}

export const PassUpdate=async(req,res)=>{
    try{
        const {newpass,email}=req.body;
        const user=await User.findOne({email});
        if(!user){
            return res.status(404).json({message:"User not exist"})
        }
        const hashpass=await bcrypt.hash(newpass,10)
        user.password=hashpass
        await user.save();
        return res.status(200).json("Password updated successfully");
    }
    catch(err){
        return res.status(404).json({message:"Password not updated"});
    }
    
    
}