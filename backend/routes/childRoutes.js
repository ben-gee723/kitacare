const express = require("express")
const router = express.Router()
const { getAllChildren, getChildSingleChild } = require("../controllers/childControllers/getControllers")
const { addChild } = require("../controllers/childControllers/postControllers")
const { updateChild } = require("../controllers/childControllers/updateControllers")

//GET:
router.get("/:id", getChildSingleChild)
router.get("/getAllChildren", getAllChildren)

//POST:
router.post("/addChild", addChild)

//PUT:
router.put("/updateChild", updateChild)

module.exports = router