const GroupModel = require("../../model/groupModel");

// update group
exports.udpateGroup = async (req, res, next) => {
    try {
        const updatedGroup = await GroupModel.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        if (updatedGroup) {
            res.status(200).send({ success: true, updatedGroup: updatedGroup })
        } else {
            res.status(400).send({ success: false, message: "no matching group found" })
        }
    }
    catch (err) {
        next(er)
    }
}
