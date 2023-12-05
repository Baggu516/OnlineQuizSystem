// const goalModal=require("../models/goalModal")
const TotalModal =require("../models/resultModal")

const results=async(req,res)=>{
    try {
        let{username,obtainedmarks,totalmarks,title}=req.body
        console.log(title,"title")
        let exist =await TotalModal.find({username,title})
        console.log(exist,"totalmodal")
        if(exist.length!=0){
            res.send("user exist or username is empty")
            console.log("user exist or username is empty")
        }
        else{
            console.log(username)
            let t=await TotalModal.create(req.body)
            if(t){
                res.send("succesful")
            }
           
        }
        
        

    } catch (error) {
        console.log("fghjkl")
    }
}
const getTotalData=async(req,res)=>{
    try {
        // let{username,obtainedmarks,totalmarks,title}=req.body
        let exist =await TotalModal.find({})
        res.send(exist)
    } catch (error) {
        console.log("gettotal errror")
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


module.exports={results,getTotalData}