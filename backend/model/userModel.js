/** @format */

const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const AddressSchema = require("./addressSchema");
//hashing password and comparing passwords
const { encrypt, compare } = require("../lib/encryption");
//signing token and verifying token
const JWT = require("jsonwebtoken");
const config = require("../config/configuration");

require("dotenv").config();
const UserSchema = new Schema({
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  address: { type: AddressSchema, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true },
  //change it to required later!!!
  kg: { ref: "kindergardens", type: Schema.Types.ObjectId, required: false },
  group: {
    ref: "groups",
    type: Schema.Types.ObjectId,
    required: false,
  },
  birthday: { type: Date, required: true },
  img: { type: String, required: false },
  role: {
    type: String,
    enum: ["Manager", "Teacher"],
    required: true,
  },
  todos: [{ text: String, done: Boolean }],
});

//Hash password before storing into database
UserSchema.pre("save", function (next) {
  if (!this.isModified("password")) return next();
  this.password = encrypt(this.password);
  next();
});

//compare user password with hashed password
UserSchema.methods.checkPassword = function (password) {
  return compare(password, this.password);
};

//create a token for user and push it into the tokens array.
UserSchema.methods.generateAuthToken = function () {
  const user = this;
  //payload + secret_key --> optional: expiration.
  const token = JWT.sign(
    { _id: user._id, email: user.email },
    process.env.SECRET_KEY, //config.secret_key want working! try later!
    {
      expiresIn: "1d",
    }
  );
  //push token into user's Tokens array
  // user.tokens.push({ token: token });
  // user.save();
  return token;
};

//verify auth token and find user into database
// UserSchema.statics.findByToken = function (token) {
//   const user = this;
//   let decoded;
//   try {
//     decoded = JWT.verify(token, process.env.SECRET_KEY);
//   } catch (err) {
//     return;
//   }
//   let searchedUser = user
//     .findOne({
//       _id: decoded._id,
//       "tokens.token": token,
//     })
//     .select("-password -__v");
//   return searchedUser;
// };
//verify auth token and find user in database
UserSchema.statics.findByToken = function (token) {
  const user = this;
  let decoded;
  try {
    decoded = JWT.verify(token, config.secret_key);
  } catch (err) {
    return;
  }
  let searchedUser = user
    .findOne({
      _id: decoded._id,
      "tokens.token": token,
    })
    .select("-password -__v");
  return searchedUser;
};

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;
