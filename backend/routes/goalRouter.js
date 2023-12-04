const {results}=require("../controllers/goalController");
const express=require("express")
 const router=express.Router()
const Auth =require("../middlewares/Auth")
 router.post("/",Auth,results)
//  router.get("/fetch",Auth,Fetch)
 
 module.exports=router