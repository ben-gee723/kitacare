/** @format */

const ChildModel = require("../../model/childModel");

// update child
exports.updateChild = async (req, res, next) => {
  const { id } = req.params;
  try {
    const updatedChild = await ChildModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (updatedChild) {
      res.status(200).send({ success: true, updatedChild: updatedChild });
    } else {
      res
        .status(400)
        .send({ success: false, message: "no matching child found" });
    }
  } catch (err) {
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
      res
        .status(200)
        .send({
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
