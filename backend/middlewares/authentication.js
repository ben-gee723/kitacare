const UserModel = require("../model/userModel");

exports.auth = async (req, res, next) => {
  try {
    //first need to grab the token and receive from the header
    //taken out the token provided by the user --> call the findByToken method --> find the user and see if the token is valid.
    const token = req.cookies["x-access-token"];
    const user = await UserModel.findByToken(token);
    if (!user) {
      throw new Error("invalid token");
    } else {
      req.user = user;
      req.token = token;
      next();
    }
  } catch (err) {
    next(err);
  }
};
