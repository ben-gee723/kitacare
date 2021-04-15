/** @format */

const UserModel = require("../../model/userModel");

//:id of kg!
exports.getManagers = async (req, res, next) => {
  try {
    const { id } = req.params;
    //const {kgId}=req.user.kg
    let managers = await UserModel.find({ kg: id, role: "Manager" })
      .populate("kg", "-__v")
      .populate("group", "-__v");
    res.send({ success: true, managers: managers });
  } catch (err) {
    next(err);
  }
};

//:id of manager!
exports.getManager = async (req, res, next) => {
  try {
    const { id } = req.params;
    let manager = await UserModel.findById(id)
      .populate("kg", "-__v")
      .populate("group", "-__v");
    console.log(manager);
    if (manager) {
      res.send({ success: true, manager: manager });
    } else {
      res
        .status(400)
        .send({ success: false, message: "no matching manager found" });
    }
  } catch (err) {
    next(err);
  }
};

//:id of kg!
exports.getTeachers = async (req, res, next) => {
  try {
    const { id } = req.params;
    let teachers = await UserModel.find({ kg: id, role: "Teacher" })
      .populate("kg", "-__v")
      .populate("group", "-__v");
    if (teachers) {
      res.send({ success: true, teachers: teachers });
    } else {
      res.status(404).send({ success: false, message: "no teachers found" });
    }
  } catch (err) {
    next(err);
  }
};

//:id of teacher!
exports.getTeacher = async (req, res, next) => {
  try {
    const { id } = req.params;
    let teacher = await UserModel.findById(id)
      .populate("kg", "-__v")
      .populate("group", "-__v");
    if (teacher) {
      res.send({ success: true, teacher: teacher });
    } else {
      res
        .status(400)
        .send({ success: false, message: "no matching teacher found" });
    }
  } catch (err) {
    next(err);
  }
};

exports.getTodos = async (req, res, next) => {
  try {
    const { id } = req.params;
    let user = await UserModel.findById(id);
    if (user) {
      user.todos.length
        ? res.send({ success: true, todos: user.todos })
        : res.send({ success: true, todos: [] });
    } else {
      res
        .status(400)
        .send({ success: false, message: "no matching user found" });
    }
  } catch (err) {
    next(err);
  }
};
