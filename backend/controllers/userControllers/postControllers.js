/** @format */

const UserModel = require("../../model/userModel");

//avaliable to manager role
exports.addTeacher = async (req, res, next) => {
  const { firstName, lastName, birthday } = req.body;
  await UserModel.findOne({
    firstName: firstName,
    lastName: lastName,
    birthday: birthday,
  })
    .then((teacher) => {
      if (!teacher) {
        UserModel.create({ ...req.body, role: "Teacher" });
        res.send({ success: true, message: "teacher saved into db" });
      } else {
        res
          .status(400)
          .send({ successs: false, message: "teacher already exists in db" });
      }
    })
    .catch((err) => next(err));
  //get in frontend and  add it to the req.body!!
};

//avaliable to manager role
exports.addManager = async (req, res, next) => {
  try {
    const { firstName, lastName, birthday } = req.body;
    const manager = await UserModel.findOne({
      firstName: firstName,
      lastName: lastName,
      birthday: birthday,
    });
    if (!manager) {
      await UserModel.create({ ...req.body, role: "Manager" });
      res.send({ success: true, message: "manager saved into db" });
    } else {
      res
        .status(400)
        .send({ successs: false, message: "manager already exists in db" });
    }
    //get kgId in frontend and  add it to the req.body!!
  } catch (err) {
    next(err);
  }
};

//login
//to use with Axios, set request option "withCredentials": true
exports.login = async (req, res, next) => {
  try {
    console.log("hey");
    const { email, password } = req.body;
    console.log(email, password);
    const user = await UserModel.findOne({ email: email });
    console.log(user);
    if (!user) {
      return res
        .status(400)
        .send({ success: false, message: "user wasn't found" });
    }
    if (!password) {
      return res
        .status(400)
        .send({ success: false, message: "password wasn't found" });
    }
    //let isUser=await user.checkPassword(password)
    let isUser = user.password === password ? true : false;
    if (isUser) {
      let userInfo = await user.userInfo();
      // const token = user.generateAuthToken();
      return (
        res
          // .cookie("x-access-token", token, {
          //   secure: false,
          //   sameSite: "lax",
          // })
          .send({
            success: true,
            message: "user login successfuly",
            userInfo: userInfo,
          })
      );
    }
  } catch (err) {
    next(err);
  }
};
