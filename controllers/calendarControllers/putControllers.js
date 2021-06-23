const UserEvent = require("../../model/calendarModel");

exports.putUpdateEvent = async (req, res, next) => {
  const { id } = req.params;
  try {
    let updatedEvent = await UserEvent.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (updatedEvent) {
      res.send({ success: true, updatedEvent: updatedEvent });
    } else {
      res
        .status(400)
        .send({ success: false, message: "no matching event found" });
    }
  } catch (err) {
    next(err);
  }
};
