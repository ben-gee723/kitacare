const ChildModel = require("../../model/childModel")


// addChild
exports.addChild = async (req, res, next) => {
    try {
        console.log("Find child")
        console.log("this is the req body", req.body.emergencyContact[0])
        console.log("this is the req body", req.body.emergencyContact[1])
        // ASYNC AWAIT
        const { lastName, firstName, birthday } = req.body
        const child = await ChildModel.findOne({ lastName: lastName, firstName: firstName, birthday: birthday })
        if (!child) {
            console.log("Child doesn't exist, attempted to create child");
            const child = await ChildModel.create(req.body);
            res.status(200).send({
                success: true,
                child: child,
                message: "child saved into db"
            })
        } else {
            res.status(400).send({
                success: false,
                message: "Child already exists in database"
            })
        }


        /*
            const child = await ChildModel.create(req.body);
        if (child.emergencyContact.length !== 0) {
            res.status(200).send({
                success: true,
                child: child,
                message: "child saved into db"
            })
        } else {
            res.status(400).send({
                success: false,
                message: "please insert information",
                child: child
            })
        }
        */
    }
    catch (err) {
        // console.log("Did not succeed");
        console.log(err)
        next(err);
    }
}
