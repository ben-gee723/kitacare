const UserModel = require("../../model/userModel")

//users/teachers
//avaliable to manager role
exports.addTeacher = async(req,res,next)=>{
  try{
      const teacher = await UserModel.create({
        ...req.body,
        role:"Teacher"
      });
      // add kg and from frontend?
      //not send the whole user, select the keys you dont want to send back in response!
      res.send({success:true,teacher:teacher,message:"teacher saved into db"})
  }catch(err){next(err)}
}

//users/managers
//avaliable to manager role
exports.addManager = async(req,res,next)=>{
  try{
      const manager = await UserModel.create({
        ...req.body,
        role:"Manager"
      });
      // add kg from frontend?
      //not send the whole user, select the keys you dont want to send back in response!
      res.send({success:true,manager:manager,message:"manager saved into db"})
  }catch(err){next(err)}
}

