const UserModel = require("../../model/userModel")

//avaliable to manager role
exports.addTeacher = async(req,res,next)=>{
  const {firstName,lastName,birthday}=req.body
  await UserModel.findOne({firstName:firstName,lastName:lastName,birthday:birthday})
      .then((teacher)=>{
        if(!teacher){
          UserModel.create({...req.body,role:"Teacher"});
          res.send({success:true,message:"teacher saved into db"})
        }else{
          res.status(400).send({successs:false,message:"teacher already exists in db"})
        }})
      .catch(err=>next(err))
      //get kgId from token in frontend and  add it to the req.body!!
      //not send the whole user, select the keys you dont want to send back in response!
      }


//avaliable to manager role
exports.addManager = async(req,res,next)=>{
  try{
  const {firstName,lastName,birthday}=req.body
  await UserModel.findOne({firstName:firstName,lastName:lastName,birthday:birthday})
      .then((manager)=>{
        if(!manager){
          UserModel.create({...req.body,role:"Manager"});
          res.send({success:true,message:"manager saved into db"})
        }else{
          res.status(400).send({successs:false,message:"manager already exists in db"})
        }})
      .catch(err=>next(err))
      //get kgId from token in frontend and  add it to the req.body!!
      //not send the whole user, select the keys you dont want to send back in response!  
  }catch(err){next(err)}
}

