const ChildModel = require("../../model/childModel");

// getAllChildren       => just for managers
exports.getAllChildren = async (req, res, next) => {
    const { id } = req.params;
    try {
        let allChildren = await ChildModel.find();
        if (allChildren) {
            res.status(200).send({ success: true, allChildren: allChildren })
        } else {
            res.status(404).send({ success: false, message: "no children found in db" })
        }
    } catch (err) {
        next(err)
    }
}

// getChildSingle    => both
exports.getChildSingleChild = async (req, res, next) => {
    const { id } = req.params;
    try {
        let child = await ChildModel.findById(id);
        if (child) {
            res.status(200).send({ success: true, child: child })
        } else {
            res.status(404).send("No matching child found")
        }
    } catch (err) {
        next(err)
    }
}
