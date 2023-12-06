const {results,getTotalData,HandleUpdate,handleDelete}=require("../controllers/goalController");
const express=require("express")
 const router=express.Router()
const Auth =require("../middlewares/Auth")
 router.post("/",Auth,results)
 router.get("/gettotaldata",Auth,getTotalData)
 router.put("/update",Auth,HandleUpdate)
 router.delete("/delete",Auth,handleDelete)
 
 module.exports=router