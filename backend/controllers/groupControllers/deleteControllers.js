const GroupModel = require("../../model/groupModel")

// Managers --> validate to check if manager
exports.deleteGroup = async (req, res, next) => {

    try {
        const { id } = req.params;
        console.log(id)
        const group = await GroupModel.findByIdAndRemove(id)
        if (group) {
            res.send({ success: true, message: "group removed from db" })
        } else {
            res.status(404).send({ success: false, message: "no matching group found in db" })
        }
    } catch (err) { next(err) }
}

