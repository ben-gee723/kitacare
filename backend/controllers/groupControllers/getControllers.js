const GroupModel = require("../../model/groupModel");

// GET ALL of the groups from MongoDB
// = just for managers
exports.getAllGroups = async (req, res, next) => {
    try {
        let allGroups = await GroupModel.find().populate("children", "-_id -__v").populate("users", "-_id -__v").select("-__v");
        if (allGroups.length !== 0) {
            res.status(200).send({ succuess: true, allGroups: allGroups })
        }
        else {
            res.status(404).send({ succuess: false, message: "No groups found in db" })
        }
    } catch (err) {
        next(err)
    }
}

// GET a SINGLE group from MongoDB
// jsut for managers
exports.getSingleGroup = async (req, res, next) => {
    const { id } = req.params;
    try {
        let singleGroup = await GroupModel.findById(id).populate("children", "-_id -__v").populate("users", "-_id -__v").select("-__v");

        if (singleGroup) {
            res.status(200).send({ succuess: true, singleGroup: singleGroup })
        }
        else {
            res.status(404).send("No groups found with that id in db")
        }

    } catch (err) {
        next(err)
    }
}
