/** @format */

const UserModel = require("../../model/userModel");

exports.deleteManager = async (req, res, next) => {
  try {
    const { id } = req.params;
    const manager = await UserModel.findById(id);
    if (manager) {
      const managers = await UserModel.find({ kg: manager.kg });
      if (!managers.length == 1) {
        await UserModel.remove();
        res.send({ success: true, message: "manager removed from db" });
      } else {
        res.status(500).send({
          success: false,
          message:
            "please create a new manager account before deleting the last manager",
        });
      }
    } else {
      res
        .status(404)
        .send({ success: false, message: "no matching manager found" });
    }
  } catch (err) {
    next(err);
  }
};

exports.deleteTeacher = async (req, res, next) => {
  try {
    const { id } = req.params;
    const teacher = await UserModel.findByIdAndRemove(id);
    if (teacher) {
      res.send({ success: true, message: "teacher removed from db" });
    } else {
      res
        .status(404)
        .send({ success: false, message: "no matching teacher found" });
    }
  } catch (err) {
    next(err);
  }
};

exports.deleteTodo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await UserModel.findById(id);
    const { value } = req.body;
    if (user) {
      let filteredTodos = user.todos.filter((todo) => todo.text !== value);
      user.todos = filteredTodos;
      console.log(user.todos);
      await user.save();
      res.send({
        success: true,
        message: "todo removed from db",
        updatedTodos: user.todos,
      });
    } else {
      res
        .status(404)
        .send({ success: false, message: "no matching user found" });
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
};
