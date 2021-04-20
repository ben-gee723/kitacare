/** @format */

const express = require("express");
const router = express.Router();
const { auth } = require("../middlewares/authentication");
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
//GET:
router.get("/getChildSingleChild/:id", auth, getChildSingleChild); // child id
router.get("/getAllChildren/:id", auth, getAllChildren); // kg id
router.get("/getChildrenFromGroup/:id", auth, getChildrenFromGroup); // group id
router.get("/getAttendanceOfChild/:id", auth, getAttendanceOfChild); // group id

//POST:
router.post("/addChild", auth, addChild);

//PUT:
router.put("/updateChild/:id", auth, updateChild);
router.put("/deleteChildsGroup/:id", auth, deleteChildsGroup);
router.put("/updateAttendance/:id", auth, updateAttendance);

//DELETE:
router.delete("/deleteChild/:id", auth, deleteChild);

module.exports = router;
