const mongoose = require("mongoose");
const { Schema } = require("mongoose");

// NEEDS CHECK
// group/classroom of children
const GroupSchema = new Schema({
  groupName: { type: String, required: true },
  room: { type: String },
  ageGroup: { type: String },
  description: { type: String },
  weeklyPlan: {}, //? for now it is not being added when a new group is added to the database
  children: [
    {
      ref: "children",
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
  teachers: [
    {
      ref: "users",
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
  kg: {
    ref: "kindergardens",
    type: mongoose.Schema.Types.ObjectId,
  },
});

const GroupModel = mongoose.model("groups", GroupSchema);
module.exports = GroupModel;
