const ChildModel = require("../../model/childModel")

// addChild
exports.addChild = async (req, res, next) => {
    try {
        const child = await ChildModel.create(req.body);
        res.status(200).send({ success: true, child: child, message: "child saved into db" })
    }
    catch (err) {
        console.log(err.message);
        next(err);
    }
}
