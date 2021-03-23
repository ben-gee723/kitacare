const express = require("express")
<<<<<<< HEAD
const router  = express.Router()
const { getKg , getKgs  } = require("../controllers/kgControllers/getControllers")
const { addKgManager  } = require("../controllers/kgControllers/postControllers")
const { updateKg } = require("../controllers/kgControllers/putController")
const { deleteKg } = require("../controllers/kgControllers/deleteController")

//GET:
router.get("/getKg/:id",getKg)
router.get("/kgs",getKgs)

//POST:
router.post("/register",addKgManager)

//PUT:
router.put("/updateKg/:id" , updateKg)

//DELETE:
router.delete("/deleteKg/:id" , deleteKg)


module.exports=router
=======
const router = express.Router()

const { getKgs, getKg } = require("../controllers/childControllers/getControllers")
const { addKgManager } = require("../controllers/childControllers/postControllers")
const { updateKg } = require("../controllers/childControllers/updateControllers")

//GET:
router.get("/:id", getKg)
router.get("/getKgs", getKgs)

//POST:
router.post("/register", addKgManager)

//PUT:
router.put("/updateKg", updateKg)


module.exports = router
>>>>>>> ben-gold
