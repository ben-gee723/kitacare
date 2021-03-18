const mongoose = require("mongoose");
const { Schema } = require("mongoose");

// group/classroom of children
const GroupSchema = new Schema({
    groupName: { type: String, required: true },
    teacher: { type: "button/function/list", required: true },
    room: { type: String },
    ageGroup: { type: String },
    description: { type: String },
    weeklyPlan: {},
    children: [{
        ref: "children",
        type: mongoose.Schema.Types.ObjectId
    }],
    teachers: [{
        ref: "users", type:
            mongoose.Schema.Types.ObjectId
    }]
})

const GroupModel = mongoose.model("groups", GroupSchema)
module.exports = GroupModel;