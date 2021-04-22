/** @format */

const ChildModel = require("../../model/childModel");
const GroupModel = require("../../model/groupModel");

exports.updateChild = async (req, res, next) => {
  const { id } = req.params;
  try {
    if (req.body.group) {
      let wantedGroupId = req.body.group;
      //find the child in group collection and delete:
      let exGroups = await GroupModel.find({ children: id });
      if (exGroups.length) {
        exGroups.map((groupObj) => {
          let filteredArr = groupObj.children.filter(
            (childrenId) => childrenId != id
          );
          groupObj.children = filteredArr;
          groupObj.save();
        });
      } //then save the child according to wantedGroup:
      let group = await GroupModel.findById(wantedGroupId);
      group.children.push(id);
      await group.save();
    }
    //update child document:
    const updatedChild = await ChildModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    console.log(updatedChild);

    res.status(200).send({ success: true, updatedChild: updatedChild });
    // } else {
    //   res
    //     .status(400)
    //     .send({ success: false, message: "no matching child found" });
    // }
  } catch (err) {
    console.log(err);
    next(err);
  }
};

exports.deleteChildsGroup = async (req, res, next) => {
  try {
    const { id } = req.params;
    const child = await ChildModel.findOne({ _id: id });

    if (child) {
      child.set("group", undefined, { strict: false });
      await child.save();
      //here find the child from group collection and delete there!
      let newChild = ChildModel.findById(id);
      res.send({ success: true, updatedChild: newChild });
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

exports.updateAttendance = async (req, res, next) => {
  const { id } = req.params;
  try {
    const child = await ChildModel.findById(id);
    if (child) {
      let date = new Date().toISOString().split("T")[0];
      let attendanceArr = [];

      if (child.attendance.length) {
        let otherdaysArr = child.attendance.filter(
          (objectos) => objectos.attendanceStatus && objectos.date != date
        );
        attendanceArr.push(...otherdaysArr);
      }
      //todays array:
      let todaysObj = {
        attendanceStatus: req.body.attendanceStatus,
        date: date,
      };
      attendanceArr.push(todaysObj);
      await ChildModel.findByIdAndUpdate(
        id,
        { attendance: attendanceArr },
        { new: true }
      );
      //think about the response!!!
      res.status(200).send({
        success: true,
        updatedAttendance: { child: child, ...todaysObj },
      });
      //{child:..., attendanceStatus: "here/notHere", date: ""}
    } else {
      res
        .status(400)
        .send({ success: false, message: "no matching child found" });
    }
  } catch (err) {
    next(err);
  }
};
