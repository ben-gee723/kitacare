const express = require("express")
const router = express.Router()
const { getAllChildren, getChildSingleChild } = require("../controllers/childControllers/getControllers")
const { addChild } = require("../controllers/childControllers/postControllers")
const { updateChild } = require("../controllers/childControllers/putControllers")
const { deleteChild } = require("../controllers/childControllers/deleteControllers")

//GET:
router.get("/getChildSingleChild/:id", getChildSingleChild)
router.get("/getAllChildren", getAllChildren)

//POST:
router.post("/addChild", addChild)

//PUT:
router.put("/updateChild/:id", updateChild)

//DELETE:
router.delete("/deleteChild/:id", deleteChild)

module.exports = router