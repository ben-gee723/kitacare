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
    img: { type: String, required: true },
    allergies: { type: String, required: true },
    dietaryNeeds: { type: String, required: true },
    // img: {type:String, required:true},

    // new Schema/Model for emergency contact?
    emergencyContact: { type: String, required: true }

})

const ChildModel = mongoose.model("child", ChildSchema)
module.exports = ChildModel;