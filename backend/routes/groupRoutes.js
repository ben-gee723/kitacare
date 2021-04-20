/** @format */

const express = require("express");
const router = express.Router();
const { auth } = require("../middlewares/authentication");
const {
  getAllGroups,
  getSingleGroup,
} = require("../controllers/groupControllers/getControllers");
const { addGroup } = require("../controllers/groupControllers/postControllers");
const {
  updateGroup,
} = require("../controllers/groupControllers/putControllers");
const {
  deleteGroup,
} = require("../controllers/groupControllers/deleteControllers");

//GET:
router.get("/getSingleGroup/:id", auth, getSingleGroup);
router.get("/getAllGroups/:id", auth, getAllGroups); //kg._id

//POST:
router.post("/addGroup", auth, addGroup);

//PUT:
router.put("/updateGroup/:id", auth, updateGroup);

// DELETE:
router.delete("/deleteGroup/:id", auth, deleteGroup);

module.exports = router;
