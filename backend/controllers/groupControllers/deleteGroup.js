const GroupModel = require("../../model/groupModel")

// Managers --> validate to check if manager
exports.deleteGroup = async (req, res, next) => {
    try {
        const { id } = req.param;
        const group = await GroupModel.findById(id)
        if (group) {
            await GroupModel.remove()
            res.send({ success: true, message: "group removed from db" })
        } else {
            res.status(404).send({ success: false, message: "no matching group found in db" })
        }
    } catch (err) { next(err) }
}

