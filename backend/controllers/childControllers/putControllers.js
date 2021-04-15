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
    try {
        const child = await ChildModel.find(id, req.body, { date: new Time })
        if (child) {
            child.attendance.push(req.body)
            child.save()
            res.status(200).send({ success: true, child: child })
        } else {
            res.status(400).send({ success: false, message: "no matching child found" })
        }
    } catch (err) {
        next(err)
    }
}