// import express from "express"
const express=require("express")
 const router=express.Router()
// import {RegisterModal} from "../models/register"
// import { Register } from "../controllers/userController"
const {Register,Login}=require("../controllers/userController")
router.post("/register",Register)
router.post("/login",Login)

// export router
module.exports=router