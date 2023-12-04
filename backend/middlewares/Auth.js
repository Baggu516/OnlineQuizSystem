const jwt =require("jsonwebtoken")
const RegisterModal=require("../models/register")
const protect=async(req,res,next)=>{
    let token;
    if(req.headers.authorization && ((req.headers.authorization.startsWith("Bearer")))){
        try {
            // get token from header
            token=req.headers.authorization.split(" ")[1]
            // verifying token
            const decode=jwt.verify(token,"jwt516")
            console.log(decode,"ddecv")
            req.user=await RegisterModal.findById(decode.id).select("-password")
            console.log(req.user,"req---user")
            // get user from token
            next()

        } catch (error) {
            res.send("Not Authorized,no token")
            
        }
    }
    else{
        res.send("dfghjkl")
    }


}
module.exports=protect