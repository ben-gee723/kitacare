const ChildModel = require("../../model/childModel")


// addChild
exports.addChild = async (req, res, next) => {
    try {
        console.log("something haha")
        // ASYNC AWAIT
        const { lastName, firstName, birthday } = req.body
        const child = await ChildModel.findOne({ lastName: lastName, firstName: firstName, birthday: birthday })
        if (!child) {
            const newChild = await ChildModel.create(req.body);
            res.status(200).send({ success: true, child: newChild })
        } else {
            res.status(400).send({ success: false, message: "Child already exists in database" })
        }

    }
    catch (err) {
        console.log("something is wrong lol");
        next(err);
    }
}
