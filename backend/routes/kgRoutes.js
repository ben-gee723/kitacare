/** @format */

const express = require("express");
const router = express.Router();
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
router.get("/getKg/:id", getKg);
router.get("/kgs", getKgs);
router.get("/getVerificationCode/:id", getVerificationCode);

//POST:
router.post("/register", addKgManager);

//PUT:
router.put("/updateKg/:id", updateKg);

//DELETE:
router.delete("/deleteKg/:id", deleteKg);

module.exports = router;
