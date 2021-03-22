const KgModel = require("../../model/kgModel")
const UserModel = require("../../model/userModel")

//kg/register
//working
exports.addKgManager = async (req, res, next) => {
  try {
    const kg = await KgModel.create(req.body.kg);
    const manager = await UserModel.create({
      ...req.body.manager,
      kg: kg._id,
      role: "Manager"
    })
    //not send the whole user, select the keys you dont want to send back in response!
    res.send({ success: true, kg: kg, manager: manager, message: "kindergarden and its manager saved into db" })
  } catch (err) {
    console.log(err);
    next(err)
  }
}