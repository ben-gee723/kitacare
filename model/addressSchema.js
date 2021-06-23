const mongoose=require("mongoose")
const Schema=mongoose.Schema;

const Address=new Schema({
  street:{type:String,required:true},
  number:{type:String,required:true},
  city:{type:String,required:true},
  postcode:{type:Number,required:true}
});

module.exports=Address;