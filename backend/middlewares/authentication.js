const UserModel = require("../model/userModel");
const JWT = require("jsonwebtoken");
require("dotenv").config();

exports.auth = async (req, res, next) => {
  try {
    //first need to grab the token and receive from the cookies.
    //taken out the token provided by the user --> call the findByToken method --> find the user and see if the token is valid.
    const token = req.cookies["x-access-token"];
    //const user = await UserModel.findByToken(token);
    // if (!user) {
    //   throw new Error("invalid token");
    // } else {
    //   req.user = user;
    //   req.token = token;
    //  next();
    //}
    JWT.verify(token, process.env.SECRET_KEY, (err, user)=>{
      if(err){
        return res.json("Expired")
      } else {
        req.user=user
        next()
      }
    })
  } catch (err) {
    next(err);
  }
};
