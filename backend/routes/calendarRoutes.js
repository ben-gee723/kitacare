const express = require("express");
const router = express.Router();
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

router.get("/calendar", getAllEvents);
router.get("/calendar:id", getSingleEvent);
router.post("/calendar", postNewEvent);
router.put("/calendar", putUpdateEvent);
router.delete("/calendar:id", deleteSingleEvent);

/* DEFAULT EXPORT */
module.exports = router;
