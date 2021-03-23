const UserEvent = require("../../model/calendarModel");

exports.deleteSingleEvent = async (req, res, next) => {
    const { id } = req.params;
    try {
      const EventDeleted = await UserEvent.findByIdAndRemove(id);
      if (EventDeleted) {
        res.status(200).send({ success: true, EventDeleted });
      } else {
        res.status(404).send("Event already deleted");
      }
    } catch (err) {
      next(err);
    }
  };