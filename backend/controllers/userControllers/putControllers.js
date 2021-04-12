/** @format */

const UserModel = require("../../model/userModel");

exports.updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    let updatedUser = await UserModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (updatedUser) {
      res.send({ success: true, updatedUser: updatedUser });
    } else {
      res
        .status(400)
        .send({ success: false, message: "no matching user found" });
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
};

exports.deleteUsersGroup = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await UserModel.findOne(
      { _id: id }
      //   { group: "" },
      //   { new: true }
    );

    if (user) {
      user.set("group", undefined, { strict: false });
      user.save();
      res.send({ success: true, message: "users group updated" });
    } else {
      res
        .status(400)
        .send({ success: false, message: "no matching user found" });
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
};
