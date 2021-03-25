const ChildModel = require("../../model/childModel")

// addChild
exports.addChild = async (req, res, next) => {
    try {
        console.log("something haha")
        // const { lastName, firstName, birthday } = req.body
        // await ChildModel.findOne({ lastName: lastName, firstName: firstName, birthday: birthday })
        //     .then((child) => {
        //         if (!child) {
        //             ChildModel.create(req.body);
        //             res.status(200).send({ success: true, child: child })
        //         } else {
        //             res.status(400).send({ success: false, message: "Child already exists in database" })
        //         }
        //     })
        // let child = await ChildModel.findOne({ lastName: lastName, firstName: firstName, birthday: birthday })
        // if (!child) {
        //     ChildModel.create(req.body);
        //     res.status(200).send({ success: true, child: child })
        // } else {
        //     res.status(400).send({ success: false, message: "Child already exists in database" })
        // }

        const child = new ChildModel(req.body);
        await child.save();
        res.send({
            success: true,
            child: child,
            message: "child saved into db",
        });
    }
    catch (err) {
        console.log("something is wrong lol");
        next(err);
    }
}
