const mongoose = require('mongoose');
// import mongoose from "mongoose"
mongoose.connect('mongodb+srv://quiz:quiz@cluster0.wjc6nhv.mongodb.net/?retryWrites=true&w=majority')
  .then(() => console.log('Connected!')).catch((err)=>{
    console.log(err,"error")
  })