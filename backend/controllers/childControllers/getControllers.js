const ChildModel = require("../../model/childModel");
const GroupModel = require("../../model/groupModel");

// getAllChildren       => just for managers
exports.getAllChildren = async (req, res, next) => {
    const { id } = req.params;
    try {
        let allChildren = await ChildModel.find({ kg: id });
        if (allChildren) {
            res.status(200).send({ success: true, allChildren: allChildren })
        } else {
            res.status(404).send({ success: false, message: "no children found in db" })
        }
    } catch (err) {
        next(err)
    }
}

// getChildSingle    => both
exports.getChildSingleChild = async (req, res, next) => {
    const { id } = req.params;
    try {
        let child = await ChildModel.findById(id);
        if (child) {
            res.status(200).send({ success: true, child: child })
        } else {
            res.status(404).send("No matching child found")
        }
    } catch (err) {
        next(err)
    }
}

exports.getChildrenFromGroup = async (req, res, next) => {
    const { id } = req.params;
    try {
        let kg = await GroupModel.findById(id).kg
        let allChildren = await ChildModel.find({ kg: kg });
        if (allChildren) {
            allChildren.filter(child => child.group == id)
            res.status(200).send({ success: true, allChildren: allChildren })
        } else {
            res.status(404).send({ success: false, message: "no children found in db" })
        }
    } catch (err) {
        next(err)
    }
}

exports.getAttendanceOfChild = async (req, res, next) => {
    const { id } = req.params;
    try {
        // let child = await ChildModel.findById(id);
        let groupChildren = await ChildModel.find({ group: id })
        let arr = [];
        groupChildren.map(child => {
            if (child.attendance.length) {
                let date = new Date().toISOString().split('T')[0]; // convert later --> dd-mm-yy

                let attendanceArr = child.attendance.filter(obj => obj.date == date)
                let obj = {
                    success: true,
                    attendanceInfo: {
                        child: child,
                        attendanceStatus: attendanceArr[0].attendanceStatus
                    }
                }
                arr.push(obj)
            } else {
                let obj = {
                    success: true,
                    attendanceInfo: {
                        child: child,
                        attendanceStatus: "notHere"
                    }
                }
                arr.push(obj)
            }
        })
        res.status(200).send({ success: true, attendanceArr: arr })
    } catch (err) {
        next(err)
    }
}