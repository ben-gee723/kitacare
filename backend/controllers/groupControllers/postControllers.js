const GroupData = require("../../model/groupModel")

// addGroup
exports.addGroup = async (req, res, next) => {
    try {
        const group = new GroupData(req.body)
        group.save()
        res.status(200).send({ success: true, group: group })
    }
    catch (err) {
        console.log(err.message)
        next()
    }
}