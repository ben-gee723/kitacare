const express = require("express")
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