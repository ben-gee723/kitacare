const express=require("express")
const router=express.Router()
const {addKgManager}=require("../controllers/kgControllers/postControllers")

router.post("/register",addKgManager)

module.exports=router