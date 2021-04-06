/** @format */

const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const AddressSchema = require("./addressSchema");

const ChildSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  birthday: { type: Date, required: true },
  address: {
    type: AddressSchema,
    required: false,
  },
  groupId: { ref: "groups", type: mongoose.Schema.Types.ObjectId },
  img: { type: String },
  allergies: { type: [String], required: false },
  dietaryNeeds: { type: [{ requirement: String }], required: false },
  emergencyContact1:
  {
    name: { type: String, required: false },
    email: { type: String, required: false },
    phoneNumber: { type: String, required: false },
  },
  emergencyContact2:
  {
    name: { type: String, required: false },
    email: { type: String, required: false },
    phoneNumber: { type: String, required: false },
  },
  attendance: [Date],
});

ChildSchema.pre("validate", function (next) {
  if (this.emergencyContact !== 0) {
    return next();
  }
  const error = new Error("please provide us with emergency contact details");
  next(error);
});

const ChildModel = mongoose.model("children", ChildSchema);

module.exports = ChildModel;
