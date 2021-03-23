const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const EventSchema = new Schema({
  startDate: { type: Date, min: "1950–01–01", required: true },
  endDate: { type: Date, min: "1950–01–01", required: true },
  name: { type: String, required: true },
  creator: { type: String, required: true },
});

const CalendarModel = mongoose.model("event", EventSchema);
module.exports = CalendarModel;
