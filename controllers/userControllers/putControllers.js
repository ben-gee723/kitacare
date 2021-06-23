/** @format */

const UserModel = require("../../model/userModel");
const GroupModel = require("../../model/groupModel");

exports.updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (req.body.group) {
      let wantedGroupId = req.body.group;
      //find the user in group collection and delete://now working
      let exGroups = await GroupModel.find({ teachers: id });
      if (exGroups.length) {
        exGroups.map((groupObj) => {
          let filteredArr = groupObj.teachers.filter(
            (teacherId) => teacherId != id
          );
          groupObj.teachers = filteredArr;
          groupObj.save();
        });
      }
      //then save the teacher according to wantedGroup://working
      let group = await GroupModel.findById(wantedGroupId);
      group.teachers.push(id);
      group.save();
    }
    let updatedUser = await UserModel.findByIdAndUpdate(id, req.body, {
      new: true,
    }).populate("group", "-__v");
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

exports.updatePassword = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { currentPassword, newPassword } = req.body;
    const user = await UserModel.findOne({ _id: id });
    if (user) {
      let isUser = await user.checkPassword(currentPassword);
      if (isUser) {
        user.password = newPassword;
        await user.save();
        res.send({ success: true, updatedUser: user });
      } else {
        //if password is not correct
        res
          .status(400)
          .send({ success: false, message: "current password is not correct" });
      }
    } else {
      //user is unbekannt
      res.status(404).send({ success: false, message: "user not found" });
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
};

exports.deleteUsersGroup = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await UserModel.findOne({ _id: id });

    if (user) {
      user.set("group", undefined, { strict: false });
      user.save();
      //here find the user from group collection and delete there!
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

exports.updateTodo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { value } = req.body;
    let user = await UserModel.findById(id);
    if (user) {
      let currentStatus;
      let newTodos = [];
      user.todos.map((todo) => {
        if (todo.text == value) {
          currentStatus = todo.done;
          newTodos.push({ text: value, done: !currentStatus });
        } else {
          newTodos.push(todo);
        }
      });
      user.todos = newTodos;
      await user.save();
      res.send({
        success: true,
        message: "todo item has been updated",
        updatedTodos: user.todos,
      });
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
