/** @format */

const express = require("express");
const router = express.Router();
const { auth } = require("../middlewares/authentication");
const {
  getKg,
  getKgs,
  getVerificationCode,
} = require("../controllers/kgControllers/getControllers");
const {
  addKgManager,
} = require("../controllers/kgControllers/postControllers");
const { updateKg } = require("../controllers/kgControllers/putController");
const { deleteKg } = require("../controllers/kgControllers/deleteController");

//GET:
router.get("/getKg/:id", auth, getKg);
router.get("/kgs", auth, getKgs);
router.get("/getVerificationCode/:id", auth, getVerificationCode);

//POST:
router.post("/register", auth, addKgManager);

//PUT:
router.put("/updateKg/:id", auth, updateKg);

//DELETE:
router.delete("/deleteKg/:id", auth, deleteKg);

module.exports = router;
