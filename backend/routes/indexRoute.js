const express=require("express")
const router=express.Router()
const getController=require("../controllers/indexController")

router.get("/",getController)

module.exports=router