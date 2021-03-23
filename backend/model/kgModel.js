const mongoose = require("mongoose")
const { Schema } = require("mongoose")
const AddressSchema = require("./addressSchema")

const kgSchema=new Schema({
  name:{type:String,required:true},
  address:{type:AddressSchema,required:true},
  phoneNumber:{type:String,required:true},
  email:{type:String,required:false}
  // users:[{ref:"users",type:Schema.Types.ObjectId}],
})

const KgModel = mongoose.model("kindergardens", kgSchema)
module.exports = KgModel