const express = require("express")
const mongoose=require("mongoose")
const morgan = require("morgan")
//routes:
const indexRoutes=require("./routes/indexRoute")
//middleware:
const app=express()
app.use(express.json())
app.use(morgan("dev"))
require('dotenv').config()

//endpoints:
app.use("/",indexRoutes)

//connection:
mongoose.connect(process.env.MONGO_ATLAS,{useNewUrlParser:true,useUnifiedTopology:true},
()=>console.log("connection established between app and mongodb"))
mongoose.connection.on("error",()=>console.log("Error found while connecting"))


//ERROR HANDLING:
app.use((req,res,next)=>{
  let error=new Error("no matching routes found")
  error.status=404
  next(error)
})

//UNIVERSAL ERROR HANDLING:
app.use((err,req,res,next)=>{
  res.status(err.status||500)
  res.send({success:false,message:err.message})
})


app.listen(3000||process.env.PORT, ()=>console.log("server is running"))