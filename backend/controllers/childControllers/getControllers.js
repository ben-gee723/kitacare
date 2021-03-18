const ChildModel = require("../../model/childModel");

// getAllChildren       => just for managers
exports.getAllChildren = async (req, res, next) => {
    try {
        let allChildren = await ChildModel.find().populate("children", "-_id - __v").select("-__v");
        if (allChildren) {
            res.status(200).send({ succuess: true, allChildren: allChildren })
        } else {
            res.status(404).send({ success: false, message: "no children found in db" })
        }
    } catch (err) {
        next(err)
    }
}

// getChildFromGroup    => both
exports.getChildSingleChild = async (req, res, next) => {
    const { id } = req.params;
    try {
        let child = await ChildModel.findById(id);
        if (child) {
            res.status(200).send({ succuess: true, child: child })
        } else {
            res.status(404).send("No matching child found")
        }
    } catch (err) {
        next(err)
    }
}
