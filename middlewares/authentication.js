/** @format */

const UserModel = require("../model/userModel");
const JWT = require("jsonwebtoken");
require("dotenv").config();

exports.auth = async (req, res, next) => {
  try {
    //first need to grab the token and receive from the cookies.
    //taken out the token provided by the user --> call the findByToken method --> find the user and see if the token is valid.
    const token = req.cookies["x-access-token"];

    const jwt = await JWT.verify(token, process.env.SECRET_KEY);
    const user = await UserModel.findById(jwt._id);

    if (!user) {
      throw "user not found";
    }

    req.userID = user._id;
    req.email = user.email;
    next();

  } catch (err) {
    res.status(401).send({ success: false, message: 'Invalid token' });
  }
};
