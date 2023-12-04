// const goalModal=require("../models/goalModal")
const TotalModal =require("../models/resultModal")

const results=async(req,res)=>{
    try {
        let {total}=req.body
        console.log(total)
        await TotalModal.create(req.body)


    } catch (error) {
        console.log("fghjkl")
    }
}






// const goal=async(req,res)=>{
//     try {
//         const newgoal=await goalModal.create(req.body)
//         res.send({"goal":newgoal})  
//     } catch (error) {
//         console.log("goalController")
//     }
   
// }
// const Fetch=async(req,res)=>{
//        let all=await goalModal.find({})
//        res.send(all)
// }


module.exports={results}