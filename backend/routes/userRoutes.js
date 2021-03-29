const express = require("express");
const router = express.Router();
const {
  getManagers,
  getManager,
  getTeachers,
  getTeacher,
} = require("../controllers/userControllers/getControllers");
const {
  addManager,
  addTeacher,
  login,
} = require("../controllers/userControllers/postControllers");
const {
  deleteManager,
  deleteTeacher,
} = require("../controllers/userControllers/deleteControllers");
const {
  updateManager,
  updateTeacher,
} = require("../controllers/userControllers/putControllers");
//GET:
//users/manager
//users/managers
router.get("/manager/:id", getManager); //:manager id
router.get("/managers", getManagers); //:kg id

//users/teacher
//users/teachers
router.get("/teacher/:id", getTeacher); //:teacher id
router.get("/teachers", getTeachers); //:kg id

//POST:
router.post("/manager", addManager);
router.post("/teacher", addTeacher);
router.post("/login", login);

//PUT:
router.put("/managers/:id", updateManager);
router.put("/teachers/:id", updateTeacher);

//DELETE:
router.delete("/managers/:id", deleteManager);
router.delete("/teachers/:id", deleteTeacher);

module.exports = router;
