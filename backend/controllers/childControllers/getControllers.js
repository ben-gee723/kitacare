/** @format */

const ChildModel = require("../../model/childModel");
const GroupModel = require("../../model/groupModel");

// getAllChildren       => just for managers
exports.getAllChildren = async (req, res, next) => {
  const { id } = req.params;
  try {
    let allChildren = await ChildModel.find({ kg: id });
    if (allChildren) {
      res.status(200).send({ success: true, allChildren: allChildren });
    } else {
      res
        .status(404)
        .send({ success: false, message: "no children found in db" });
    }
  } catch (err) {
    next(err);
  }
};

// getChildSingle    => both
exports.getChildSingleChild = async (req, res, next) => {
  const { id } = req.params;
  try {
    let child = await ChildModel.findById(id);
    if (child) {
      res.status(200).send({ success: true, child: child });
    } else {
      res.status(404).send("No matching child found");
    }
  } catch (err) {
    next(err);
  }
};

exports.getChildrenFromGroup = async (req, res, next) => {
  const { id } = req.params;
  try {
    let allChildren = await ChildModel.find({ group: id });
    if (allChildren.length) {
      res.status(200).send({ success: true, allChildren: allChildren });
    } else {
      res
        .status(200)
        .send({
          success: true,
          allChildren: [],
          message: "this group doesnt have any child",
        });
    }
  } catch (err) {
    next(err);
  }
};

exports.getAttendanceOfChild = async (req, res, next) => {
  const { id } = req.params;
  try {
    let groupChildren = await ChildModel.find({ group: id });
    let arr = [];
    let date = new Date().toISOString().split("T")[0];

    let saveIntoDB = async (child) => {
      let objToSave = { attendanceStatus: "notHere", date: date };
      child.attendance.push(objToSave);
      await child.save();
      console.log(child);
      return {
        success: true,
        attendanceInfo: {
          child: child,
          attendanceStatus: "notHere",
        },
      };
    };

    groupChildren.map((child) => {
      //if there is min one attandence obj in the list: for each child:
      if (child.attendance.length) {
        let attendanceArr = child.attendance.filter(
          (objectos) => objectos.date == date
        );
        //if there is an attendance obj for today:
        if (attendanceArr.length) {
          let obj = {
            success: true,
            attendanceInfo: {
              child: child,
              attendanceStatus: attendanceArr[0].attendanceStatus,
            },
          };
          arr.push(obj);

          //if there is no obj for today:
        } else {
          let obj = saveIntoDB(child);
          arr.push(obj);
        }
        //if attandence list is an empty array:
      } else {
        let obj = saveIntoDB(child);
        arr.push(obj);
      }
    });
    console.log(arr);
    res.status(200).send({ success: true, attendanceArr: arr });
  } catch (err) {
    console.log(err);
    next(err);
  }
};
