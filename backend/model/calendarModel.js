const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const calendarSchema = new Schema({
  startDate: { type: Date, min: "1950–01–01", required: true },
  endDate: { type: Date, min: "1950–01–01", required: true },
  event: { type: String, required: true },
  role: { type: String, enum: ["Manager", "Teacher"], required: true },
});

const CalendarModel = mongoose.model("event", calendarSchema);
module.exports = CalendarModel;
