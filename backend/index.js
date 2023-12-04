// import express from "express"
const cors=require("cors")
const express=require("express")
const app =express()
require("./database/db.js")
app.use(express.json())
app.use(cors())
// import LoginModal from "./models/login.js"
// ..........
// import {router} from "./routes/userRouter.js"

// ........

app.get("/",(req,res)=>{
    res.send("hello")
})
app.use("/user",require("./routes/userRouter.js"))
app.use("/result",require("./routes/goalRouter.js"))
const port = process.env.PORT || 5000;

app.listen(port, () => console.log("server listened" +" "+ port ));
