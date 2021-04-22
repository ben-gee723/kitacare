/** @format */

const GroupModel = require("../../model/groupModel");

// update group
exports.updateGroup = async (req, res, next) => {
  const { id } = req.params;
  try {
    const updatedGroup = await GroupModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (updatedGroup) {
      res.status(200).send({ success: true, updatedGroup: updatedGroup });
    } else {
      res
        .status(400)
        .send({ success: false, message: "no matching group found" });
    }
  } catch (err) {
    next(err);
  }
};
