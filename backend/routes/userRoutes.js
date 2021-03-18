const express=require("express")
const router=express.Router()
const { getManagers,getManager,getTeachers,getTeacher } = require("../controllers/userControllers/getControllers")
const { addManager,addTeacher } = require("../controllers/userControllers/postControllers")

//GET:
//users/managers
router.get("/managers/:id",getManager)
router.get("/managers",getManagers)

//users/teachers
router.get("/teachers/:id",getTeacher)
router.get("/teachers",getTeachers)

//POST:
router.post("/managers",addManager)
router.post("/teachers",addTeacher)
module.exports=router