/** @format */

const express = require("express");
const router = express.Router();
const { auth } = require("../middlewares/authentication");
const {
  getAllEvents,
  getSingleEvent,
} = require("../controllers/calendarControllers/getControllers");
const {
  postNewEvent,
} = require("../controllers/calendarControllers/postControllers");
const {
  deleteSingleEvent,
} = require("../controllers/calendarControllers/deleteControllers");
const {
  putUpdateEvent,
} = require("../controllers/calendarControllers/putControllers");

router.get("/getAllEvents", auth, getAllEvents);
router.get("/getSingleEvent/:id", auth, getSingleEvent);
router.post("/postNewEvent", auth, postNewEvent);
router.put("/putUpdateEvent", auth, putUpdateEvent);
router.delete("/deleteSingleEvent/:id", auth, deleteSingleEvent);

/* DEFAULT EXPORT */
module.exports = router;
