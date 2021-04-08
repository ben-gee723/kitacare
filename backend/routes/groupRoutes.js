/** @format */

const express = require("express");
const { deleteGroup } = require("../controllers/groupControllers/deleteControllers");
const router = express.Router();
const {
  getAllGroups,
  getSingleGroup,
} = require("../controllers/groupControllers/getControllers");
const { addGroup } = require("../controllers/groupControllers/postControllers");
const {
  updateGroup,
} = require("../controllers/groupControllers/putControllers");

<<<<<<< HEAD
=======
const {
  deleteGroup,
} = require("../controllers/groupControllers/deleteControllers");
>>>>>>> develop

//GET:
router.get("/getSingleGroup/:id", getSingleGroup);
router.get("/getAllGroups/:id", getAllGroups);

//POST:
router.post("/addGroup", addGroup);

//PUT:
router.put("/updateGroup/:id", updateGroup);

// DELETE:
router.delete("/deleteGroup/:id", deleteGroup);

module.exports = router;
