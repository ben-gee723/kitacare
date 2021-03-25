const ChildModel = require("../../model/childModel")

//Managers --> validate eto check if manager
exports.deleteChild = async (req, res, next) => {
    try {
        const { id } = req.param;
        const child = await ChildModel.findById(id)
        if (child) {
            await ChildModel.remove()
            res.send({ success: true, message: "child removed from db" })
        } else {
            res.status(404).send({ success: false, message: "no matching child found in db" })
        }
    } catch (err) { next(err) }
}

