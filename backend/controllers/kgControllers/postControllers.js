const KgModel = require("../../model/KgModel")
const UserModel=require("../../model/userModel")

//users/managers or /users/teachers
exports.addKgManager = async(req,res,next)=>{
  try{
      const kg = await KgModel.create(req.body.kg); // <-- instantiate the model + save in one command
      const manager = await UserModel.create({
        ...req.body.manager,
        kg: kg._id,
        role:"Manager"
      }) 
      //const addedKg=kg.select("-_id")//? not send the whole user, select the keys you dont want to send back in response!
      res.send({success:true,kg:kg,manager:manager,message:"kindergarden and its manager saved into db"})
  }catch(err){
    console.log(err);
    next(err)}
}