const GroupData = require("../../model/groupModel");

// update group
exports.udpateGroup = async (req, res, next) => {
    try {
        const updatedGroup = await GroupDate.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        res.status(200).send({ success: true, updatedGroup: updatedGroup })
    }
    catch (err) {
        next()
    }
}