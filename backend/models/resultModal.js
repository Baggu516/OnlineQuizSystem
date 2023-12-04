const mongoose =require("mongoose")
const schemaa=mongoose.Schema(
    {
        total:String,

    }
)
const TotalModal=mongoose.model("TotalModal",schemaa)
module.exports=TotalModal;