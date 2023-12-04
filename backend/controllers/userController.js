// import RegisterModal from "../models/register"
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")

const RegisterModal =require("../models/register")
const LoginModal =require("../models/login")
const Register=async(req,res)=>{
    try {
        let {username,email,password,phone}=req.body
        if(!username || !email || !password || !phone){
            res.send({msg:"Enter All Feilds"})
        }else{
            console.log(await RegisterModal.find({email:email}),"user")
            let exist=await RegisterModal.find({email:email})
            console.log(exist,"exist")
            if(exist.length!=0){
                res.send({msg:"user already Exists"})
            }else{
                let salt =await bcrypt.genSalt(10)
                let hashedPassward= await bcrypt.hash(password,salt)
                let t =await RegisterModal.create({
                    username:username,
                    email:email,
                    password:hashedPassward
                })
                // res.send({token:generateJwt(t._id)})
                res.send({msg:"register successfully",token:generateJwt(t._id)})
            }
           
        }
        
    } catch (err) {
        console.log("err",err.message)
    }
   

}
// ............Login..............................................
const Login=async(req,res)=>{
    try {
        let {username,password}=req.body
        let user=await RegisterModal.findOne({username})
        console.log("email",user)
        console.log(await bcrypt.compare(password,user.password),"paswwordddddd")
        if(user && (await bcrypt.compare(password,user.password))){
            // res.send({msg:"Logged In",token:generateJwt(user._id)})
            // res.send(user)
            res.send({msg:"login sucessfully",token:generateJwt(user._id)})
        }else{
            res.send({msg:"Enter Valid and password"})
        }
        
    } catch (error) {
        console.log("loginerrr")
    }
    // res.send("login")
    // ......Generate jwt Token.......................
   
}
const generateJwt=(id)=>{
    return jwt.sign({id},"jwt516",{expiresIn:"20d"})
}
module.exports={Register,Login}