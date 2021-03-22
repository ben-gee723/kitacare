const GroupModel = require("../../model/groupModel")

// addGroup
exports.addGroup = async (req, res, next) => {
    try {
        const group = await GroupModel.create(req.body);
        res.status(200).send({ success: true, group: group, message: "group saved into db" })
    }
    catch (err) {
        next(err)
    }
}
