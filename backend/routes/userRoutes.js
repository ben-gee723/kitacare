/** @format */

const express = require("express");
const router = express.Router();
const cors = require("cors");
const auth = require("../middlewares/authentication");

const {
  getManagers,
  getManager,
  getTeachers,
  getTeacher,
  getTodos,
} = require("../controllers/userControllers/getControllers");
const {
  addManager,
  addTeacher,
  login,
  addTodo,
} = require("../controllers/userControllers/postControllers");
const {
  deleteManager,
  deleteTeacher,
  deleteTodo,
} = require("../controllers/userControllers/deleteControllers");
const {
  updateUser,
  deleteUsersGroup,
  updatePassword,
  updateTodo,
} = require("../controllers/userControllers/putControllers");
//GET:
//users/manager
router.get("/manager/:id", getManager); //:manager id
router.get("/managers/:id", getManagers); //:kgId

//users/teacher
//users/teachers
router.get("/teacher/:id", getTeacher); //:teacher id
router.get("/teachers/:id", getTeachers); //:kgId
//both
router.get("/getTodos/:id", getTodos);

//POST:
router.post("/manager", addManager);
router.post("/teacher", addTeacher);
router.post("/login", login);
router.post("/addTodo/:id", addTodo);

//PUT:
router.put("/users/:id", updateUser);
router.put("/updatePassword/:id", updatePassword);
router.put("/userGroup/:id", deleteUsersGroup);
router.put("/updateTodo/:id", updateTodo);

//DELETE
router.delete("/managers/:id", deleteManager);
router.delete("/teachers/:id", deleteTeacher);
router.delete("/deleteTodo/:id", deleteTodo);

module.exports = router;
