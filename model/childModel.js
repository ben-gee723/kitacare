/** @format */

const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const AddressSchema = require("./addressSchema");

const ChildSchema = new Schema({
  firstName: { type: String, required: false },
  lastName: { type: String, required: false },
  birthday: { type: Date, required: false },
  address: {
    type: AddressSchema,
    required: false,
  },
  kg: { ref: "kindergardens", type: mongoose.Schema.Types.ObjectId },
  img: { type: String },
  allergies: { type: [], required: false },
  dietaryNeeds: { type: String, required: false },
  emergencyContact: { type: [], required: false },
  attendance: [],
  group: {
    ref: "groups",
    type: Schema.Types.ObjectId,
    required: false,
  },
});

const ChildModel = mongoose.model("children", ChildSchema);

module.exports = ChildModel;
