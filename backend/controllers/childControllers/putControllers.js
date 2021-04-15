const ChildModel = require("../../model/childModel");

// update child
exports.updateChild = async (req, res, next) => {
    const { id } = req.params;
    try {
        const updatedChild = await ChildModel.findByIdAndUpdate(id, req.body, {
            new: true
        })
        if (updatedChild) {
            res.status(200).send({ success: true, updatedChild: updatedChild })
        } else {
            res.status(400).send({ success: false, message: "no matching child found" })
        }
    } catch (err) {
        next(err)
    }
}

exports.updateAttendance = async (req, res, next) => {
    const { id } = req.params;
    console.log(req.body)
    try {
        const child = await ChildModel.findById(id)

        if (child) {
            let date = new Date().toISOString().split('T')[0];
            let attendanceArr = [];
            // if there is no object in attendance list
            // make a new object
            // save it in the attendance list
            // instead of mapping through it
            child.attendance.map(objectos => {
                console.log(objectos.date.toISOString().split('T')[0])
                console.log(date)
                if (objectos.date.toISOString().split('T')[0] != date) {
                    attendanceArr.push(objectos)
                } else {
                    attendanceArr.push({ attendanceStatus: req.body.attendanceStatus, date: date })
                }
            })
            console.log(attendanceArr)
            child.attendance = attendanceArr;
            await child.save()
            res.status(200).send({ success: true, updatedAttendance: child.attendance })

        } else {
            res.status(400).send({ success: false, message: "no matching child found" })
        }
    } catch (err) {
        next(err)
    }
}