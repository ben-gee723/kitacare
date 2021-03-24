const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const AddressSchema = require("./addressSchema");
//hashing password and comparing passwords
const { encrypt, compare } = require("../lib/encryption");
//signing token and verifying token
const JWT = require("jsonwebtoken");
const config = require("../config/configuration");

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  address: { type: AddressSchema, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true },
  //change it to required later!!!
  kg: { ref: "kindergardens", type: Schema.Types.ObjectId, required: false },
  groupName: { type: String, required: false },
  birthday: { type: Date, min: "1950-01-01", required: true },
  img: { type: String, required: false },
  role: {
    type: String,
    enum: [
      "Manager",
      "Teacher",
      //,"unverified"
    ],
    required: true,
  },
});

const UserModel = mongoose.model("users", userSchema);
module.exports = UserModel;
