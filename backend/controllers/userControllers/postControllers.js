const UserModel = require("../../model/userModel")
//think about having only addUser and having role field in req.body 

//users/teachers
//avaliable to manager role
exports.addTeacher = async(req,res,next)=>{
      const {firstName,lastName}=req.body
      await UserModel.findOne({firstName:firstName,lastName:lastName})
      .then((teacher)=>{
        if(!teacher){
        UserModel.create({
        ...req.body,
        role:"Teacher",
        });
        res.send({success:true,message:"teacher saved into db"})
        }else{
          res.status(400).send({successs:false,message:"teacher already exists in db"})
        }
      }).catch(err=>next(err))
      // add kg and from frontend? //get it from token!!
      //not send the whole user, select the keys you dont want to send back in response!
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

