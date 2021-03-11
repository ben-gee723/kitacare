const UserModel=require("../../model/userModel")

exports.getManagers=async(req,res,next)=>{
  try{
  let managers=await UserModel.find({role:"Manager"})
  res.send({success:true,managers:managers})
  //delete endpoint: think about=> managers.length==1
  }catch(err){next(err)}
}

exports.getManager = async(req,res,next)=>{
  try{
  const { id } = req.params;
  let manager = await UserModel.findById(id)   // "message": "Cast to ObjectId failed for value \"123\" at path \"_id\" for model \"users\"
  if(manager){
    res.send({success:true,manager:manager})
  }else{
    res.status(400).send({success:false,message:"no matching manager found"})
  }
  }catch(err){next(err)}
}

exports.getTeachers = async(req,res,next)=>{
  try{
  let teachers = await UserModel.find({role:"Teacher"})
  if(teachers){
    res.send({success:true,teachers:teachers})
  }else{
    res.status(404).send({success:false,message:"no teachers found"})
  }
  }catch(err){next(err)}
}

exports.getTeacher = async(req,res,next)=>{
  const { id } = req.params;
    console.log(id);
  try{
  

  let teacher = await UserModel.findById( id )
  if(teacher){
    res.send( {success:true,teacher:teacher} )
  }else{
    console.log("rendering")
    res.status(400).send({success:false,message:"no matching teacher found"})
  }
  }catch(err){next(err)}
}
