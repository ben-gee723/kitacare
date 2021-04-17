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
    let kg = await GroupModel.findById(id).kg;
    let allChildren = await ChildModel.find({ kg: kg });
    if (allChildren) {
      allChildren.filter((child) => child.group == id);
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

exports.getAttendanceOfChild = async (req, res, next) => {
  const { id } = req.params;
  try {
    let groupChildren = await ChildModel.find({ group: id });
    let arr = [];
    groupChildren.map((child) => {
      //if there is min one attandence obj in the list: for each child:
      if (child.attendance.length) {
        let date = new Date().toISOString().split("T")[0];
        //ayni gun verilerinden olusan bir array yapiyorum:
        let attendanceArr = child.attendance.filter(
          (objectos) => objectos.date == date
          //objectos.date.toISOString().split("T")[0] == date
        );
        //if there is an attendance obj for today:
        if (attendanceArr.length) {
          console.log(
            "the attendance info will be saved into db: " +
              attendanceArr[0].attendanceStatus
          );
          let obj = {
            success: true,
            attendanceInfo: {
              child: child,
              attendanceStatus: attendanceArr[0].attendanceStatus,
            },
          };
          arr.push(obj);

          //if there is no obj for today:?? do we need to save this obj (with date without child to each children ?? )into database first??
        } else {
          let obj = {
            success: true,
            attendanceInfo: {
              child: child,
              attendanceStatus: "notHere",
            },
          };
          arr.push(obj);
        }
        //if attandence list is an empty array:for each child:do we need to save this obj(with date without child to each children ?? ) into database first??
      } else {
        let obj = {
          success: true,
          attendanceInfo: {
            child: child,
            attendanceStatus: "notHere",
          },
        };
        arr.push(obj);
      }
    });
    res.status(200).send({ success: true, attendanceArr: arr });
  } catch (err) {
    console.log(err);
    next(err);
  }
};
