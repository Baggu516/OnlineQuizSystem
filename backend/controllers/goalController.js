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
// .......upadting
const HandleUpdate=async(req,res)=>{
    try {
        console.log("upadated data",req.body)
        let {_id,username, obtainedmarks, totalmarks,title}=req.body
        let exist=await TotalModal.findByIdAndUpdate(_id,{username, obtainedmarks, totalmarks,title},{ new: true })
        // await exist.save()
        console.log(exist,"exist")
        if(!exist){
            res.send({msg:"not updated"})
        }
        else{
            res.send(await TotalModal.find({}))
        }
       
        
    } catch (error) {
        console.log("errr in updation")
    }
}
// .......deleting the item.................
const handleDelete=async(req,res)=>{
    try {
        let {_id}=req.body
        console.log(req.body,"req.body")
        let t=await TotalModal.findByIdAndDelete(req.body._id) 
        console.log(t,"ttttttttt")
        if(!t){
            res.send("not delete")
            console.log("not deleted")
        }
        else{
            res.send(await TotalModal.find({}))
            console.log("deleted")
        }
    } catch (error) {
        console.log("deleted func")
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


module.exports={results,getTotalData,HandleUpdate,handleDelete}