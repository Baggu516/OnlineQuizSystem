const mongoose =require("mongoose")
const schemaa=mongoose.Schema(
    {   username:String,
        obtainedmarks:String,
        totalmarks:String,
        title:String

    }
)
const TotalModal=mongoose.model("TotalModal",schemaa)
module.exports=TotalModal;