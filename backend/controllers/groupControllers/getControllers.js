const GroupModel = require("../../model/groupModel");

// GET ALL of the groups from MongoDB
// = just for managers
exports.getAllGroups = async (req, res, next) => {
    try {
        let allGroups = await GroupModel.find().populate("groups", "-_id -__v").select("-__V");
        if (allGroups.length !== 0) {
            res.status(200).send({ succuess: true, allGroups: allGroups })
        }
        else {
            res.status(200).send({ succuess: false, message: "No groups found" })
        }
    } catch (err) {
        next(err)
    }
}

// GET a SINGLE group from MongoDB
// jsut for managers
exports.getGroupChidren = async (req, res, next) => {
    const { id } = req.params;
    try {
        let groupChildren = await GroupModel.findById(id).select("-_id -__v");

        // OR
        // select("groupName")

        if (groupChildren) {
            res.status(200).send({ succuess: true, groupChildren: groupChildren })
        }
        else {
            res.status(404).send("No such group found with that Id")
        }

    } catch (err) {
        next(err)
    }
}

exports.getGroupTeachers = async (req, res, next) => {
    let groupTeachers = await GroupData.findById(id).select("teachers");
}