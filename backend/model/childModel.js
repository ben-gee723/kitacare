const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const AddressSchema = require("./addressSchema")

const ChildSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    birthday: { type: Date, min: "1950–01–01", required: true },
    address: {
        type: AddressSchema,
        required: false
    },
    groupId: { ref: "groups", type: mongoose.Schema.Types.ObjectId },
    img: { type: String },
    allergies: { type: [{ to: String }], required: false },
    dietaryNeeds: { type: [{ requirement: String }], required: false },
    emergencyContact: [{
        name: { type: String, required: false },
        address: { type: AddressSchema, required: false },
        phoneNumber: { type: String, required: false }
    }],
    attendance: [{
        date: Date,
        checkIn: {
            guardian: String,
            timestamp: Date
        },
        checkOut: {
            guardian: String,
            timestamp: Date
        }

    }]
})

ChildSchema.pre("validate", function (next) {
    if (this.emergencyContact !== 0) {
        return next()
    }
    const error = new Error("please provide us with emergency contact details")
    next(error)
})

const ChildModel = mongoose.model("children", ChildSchema);

module.exports = ChildModel;

