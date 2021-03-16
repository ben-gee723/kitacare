const express=require("express")
const router=express.Router()
const {addKg}=require("../controllers/kgControllers/postControllers")

router.post("/",addKg)

module.exports=router