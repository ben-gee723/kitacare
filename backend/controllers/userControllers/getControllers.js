const UserModel = require("../../model/userModel");

//managers who are working in a certain kg!!!!
//:id of kg!
exports.getManagers = async (req, res, next) => {
  try {
    const { kgId } = req.params;
    let managers = await UserModel.find({ "kg._id": kgId, role: "Manager" });
    res.send({ success: true, managers: managers });
  } catch (err) {
    next(err);
  }
};

//:id of manager!
exports.getManager = async (req, res, next) => {
  try {
    const { id } = req.params;
    let manager = await UserModel.find({ kg: id, role: "Manager" });
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

//teachers who are working in a certain kg!!!!
//:id of kg!
exports.getTeachers = async (req, res, next) => {
  try {
    const { kgId } = req.params;
    let teachers = await UserModel.find({ "kg._id": kgId, role: "Teacher" });
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
    let teacher = await UserModel.findById(id);
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
