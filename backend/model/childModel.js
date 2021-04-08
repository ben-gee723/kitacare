/** @format */

const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const AddressSchema = require("./addressSchema");

const EmergencyContactSchema = new Schema({
    name: { type: String, required: false },
    email: { type: String, required: false },
    number: { type: String, required: false }
});

const ChildSchema = new Schema({
    firstName: { type: String, required: false },
    lastName: { type: String, required: false },
    birthday: { type: Date, required: false },
    address: {
        type: AddressSchema,
        required: false,
    },
    kg: { ref: "kindergardens", type: mongoose.Schema.Types.ObjectId },
    img: { type: String },
    allergies: { type: [], required: false },
    dietaryNeeds: { type: String, required: false },
    // emergencyContact: {[
    //     { Emergency1: EmergencyContactSchema },
    //     { Emergency2: EmergencyContactSchema }
    // ]},
    emergencyContact: { type: [], required: false },
    attendance: [
        { date: Date }
    ]
})

/*
    ChildSchema.pre("validate", function (next) {
    if (this.emergencyContact !== 0) {
        return next();
    }
    const error = new Error("please provide us with emergency contact details");
    next(error);
    });
 */

const ChildModel = mongoose.model("children", ChildSchema);

module.exports = ChildModel;
