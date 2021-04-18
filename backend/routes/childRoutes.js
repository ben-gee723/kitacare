/** @format */

const express = require("express");
const router = express.Router();
const {
  getAllChildren,
  getChildSingleChild,
  getChildrenFromGroup,
  getAttendanceOfChild,
} = require("../controllers/childControllers/getControllers");
const { addChild } = require("../controllers/childControllers/postControllers");
const {
  updateChild,
  updateAttendance,
  deleteChildsGroup,
} = require("../controllers/childControllers/putControllers");
const {
  deleteChild,
} = require("../controllers/childControllers/deleteControllers");
const auth = require("../middlewares/authentication");
//GET:
router.get("/getChildSingleChild/:id", getChildSingleChild); // child id
router.get("/getAllChildren/:id", getAllChildren); // kg id
router.get("/getChildrenFromGroup/:id", getChildrenFromGroup); // group id
router.get("/getAttendanceOfChild/:id", getAttendanceOfChild); // group id

//POST:
router.post("/addChild", addChild);

//PUT:
router.put("/updateChild/:id", updateChild);
router.put("/deleteChildsGroup/:id", deleteChildsGroup);
router.put("/updateAttendance/:id", updateAttendance);

//DELETE:
router.delete("/deleteChild/:id", deleteChild);

module.exports = router;
