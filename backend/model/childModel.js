const mongooose = require("mongoose");
const { Schema } = require("mongoose");
const AddressSchema = require("./addressSchema")

const ChildSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    birthday: { type: Date, min: "1950–01–01", required: true },
    address: {
        type: AddressSchema,
        required: true
    },
    groupName: { type: String, required: true },
    img: { type: String, required: false },
    allergies: { type: [{ to: String }], required: true },
    dietaryNeeds: { type: [{ requirement: String }], required: true },
    img: { type: String, required: false },
    emergencyContact: { type: [{ name: String, address: AddressSchema, phoneNumber: String }], required: true }

})

const ChildModel = mongoose.model("child", ChildSchema)
module.exports = ChildModel;