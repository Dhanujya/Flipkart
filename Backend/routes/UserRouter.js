import express from "express"
import { Login, PassUpdate, Signup, VerifyEmail } from "../controllers/UserController.js";
const UserRouter=express.Router();
UserRouter.post("/signup",Signup)
UserRouter.post("/login",Login)
UserRouter.post("/check-email",VerifyEmail)
UserRouter.post("/updatepassword",PassUpdate)
export default UserRouter
