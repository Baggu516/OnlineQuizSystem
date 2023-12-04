// import mongoose from "mongoose"
const mongoose =require("mongoose")
const schemaa=mongoose.Schema(
    {
        username:String,
        email:String,
        phone:String,
        password:String,

    }
)
const RegisterModal=mongoose.model("RegisterModal",schemaa)
module.exports=RegisterModal;
// export default RegisterModal