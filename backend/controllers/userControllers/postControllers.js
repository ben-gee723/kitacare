/** @format */

const UserModel = require("../../model/userModel");
const KgModel = require("../../model/kgModel");

//avaliable to manager role
exports.addTeacher = async (req, res, next) => {
  console.log(req.body);
  const { firstName, lastName, birthday } = req.body;
  await UserModel.findOne({
    firstName: firstName,
    lastName: lastName,
    birthday: birthday,
  })
    .then((teacher) => {
      if (!teacher) {
        //get the varificationcode
        let { verificationCode } = req.body;
        //search it through verification codes arrays in kgModels!
        KgModel.findOne({
          //verificationCodes: { $in: verificationCode },
          verificationCodes: verificationCode,
        }).then((kg) => {
          if (!kg) {
            res
              .status(400)
              .send({ successs: false, message: "wrong verification code" });
          } else {
            //if there is; delete varification code from array
            kg.verificationCodes = kg.verificationCodes.filter(
              (code) => code != verificationCode
            );
            kg.save();
            //save teacher with kgId!! of this kg and send 200 to user
            UserModel.create({
              ...req.body,
              kg: kg._id,
              role: "Teacher",
            });
            res.send({
              success: true,
              email: req.body.email,
              message: "teacher saved into db",
            });
          }
        });
        //if there is no, response 400:
      } else {
        res
          .status(400)
          .send({ successs: false, message: "teacher already exists in db" });
      }
    })
    .catch((err) => next(err));
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
      res.send({
        success: true,
        email: req.body.email,
        message: "manager saved into db",
      });
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
      return res.status(400).send({ success: false, message: "password wasn't found" });
    }
    let isUser = await user.checkPassword(password);
    //let isUser = user.password === password ? true : false;
    if (isUser) {
      let userInfo = await user.userInfo();
      const token = user.generateAuthToken();
      return (
        res
           .cookie("x-access-token", token, {
             secure: false,
             sameSite: "lax",
          })
          .send({
            success: true,
            message: "user logged in successfuly",
            userInfo: userInfo,
          })
      );
    }
  } catch (err) {

  }
}