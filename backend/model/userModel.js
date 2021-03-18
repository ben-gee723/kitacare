const mongoose=require("mongoose")
const {Schema}=require("mongoose")
const AddressSchema=require("./addressSchema")

const userSchema=new Schema({
  firstName:  {type:String,required:true},
  lastName:   {type:String,required:true},
  address:    {type:AddressSchema,required:true},
  phoneNumber:{type:String,required:true},
  email:      {type:String,required:true},
  kg:         {ref:"kindergardens",type:Schema.Types.ObjectId,required:false},
  groupName:  {type:String,required:false},
  birthday:   { type: Date,
                min: '1950-01-01',
                required:true
              },
  img:        {type:String,required:false},
  role:       {type:String,
              enum:[
                    "Manager",
                    "Teacher"
                    //,"unverified"
                  ],
              required:true
            },
})


const UserModel=mongoose.model("users",userSchema)
module.exports=UserModel