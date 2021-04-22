const UserEvent = require("../../model/calendarModel");

exports.postNewEvent = async (req, res, next) => {
  try {
    const event = new UserEvent(req.body);
    await event.save();
    res.send({
      success: true,
      event: event,
      message: "Event saved into db",
    });
  } catch (err) {
    next(err);
  }
};
