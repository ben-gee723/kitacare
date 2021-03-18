const KgModel = require("../../model/kgModel")

//users/managers or /users/teachers
exports.addKg = async(req,res,next)=>{
  try{

      const kg = await KgModel.create(req.body.kg); // <-- instantiate the model + save in one command
      console.log(kg);

      const manager = User.create({
        ...req.body.manager,
        kg: kg._id,
        role:"Manager"
      })
      // const addedKg=kg.select("-_id")//?
      //not send the whole user, select the keys you dont want to send back in response!
      res.send({success:true,kg:kg,manager:manager,message:"kindergarden saved into db"})
  }catch(err){next(err)}
}