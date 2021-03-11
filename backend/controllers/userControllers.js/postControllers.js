const UserModel = require("../../model/userModel")

//users/managers or /users/teachers
exports.addUser = async(req,res,next)=>{
  try{
      const user = new UserModel(req.body);
      await user.save()
      const addedUser=(await UserModel.findById(user.id)).select("-id")//?
      //not send the whole user, select the keys you dont want to send back in response!
      res.send({success:true,user:addedUser,message:"user saved into db"})
  }catch(err){next(err)}
}

