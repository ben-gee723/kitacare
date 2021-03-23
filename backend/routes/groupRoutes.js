const express = require("express")
const router = express.Router()
const { getAllGroups, getSingleGroup } = require("../controllers/groupControllers/getControllers")
const { addGroup } = require("../controllers/groupControllers/postControllers")
const { updateGroup } = require("../controllers/groupControllers/updateControllers")

//GET:
router.get("/:id", getSingleGroup)
router.get("/getAllGroups", getAllGroups)

//POST:
router.post("/addGroup", addGroup)

//PUT:
router.put("/updateGroup", updateGroup)

module.exports = router