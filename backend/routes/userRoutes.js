/** @format */

const express = require("express");
const router = express.Router();
const { auth } = require("../middlewares/authentication");

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
router.get("/manager/:id", auth, getManager); //:manager id
router.get("/managers/:id", auth, getManagers); //:kgId

//users/teacher
//users/teachers
router.get("/teacher/:id", auth, getTeacher); //:teacher id
router.get("/teachers/:id", auth, getTeachers); //:kgId
//both
router.get("/getTodos/:id", auth, getTodos);

//POST:
router.post("/manager", auth, addManager);
router.post("/teacher", auth, addTeacher);
router.post("/login", login);
router.post("/addTodo/:id", auth, addTodo);

//PUT:
router.put("/users/:id", auth, updateUser);
router.put("/updatePassword/:id", auth, updatePassword);
router.put("/userGroup/:id", auth, deleteUsersGroup);
router.put("/updateTodo/:id", auth, updateTodo);

//DELETE
router.delete("/managers/:id", auth, deleteManager);
router.delete("/teachers/:id", auth, deleteTeacher);
router.delete("/deleteTodo/:id", auth, deleteTodo);

module.exports = router;
