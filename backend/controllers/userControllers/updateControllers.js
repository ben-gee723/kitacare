const UserModel=require("../../model/userModel")

exports.updateTeacher = async(req,res,next)=>{
  const { id } = req.params;
  try{
  let updatedTeacher = await UserModel.findByIdAndUpdate( id,req.body,{new:true} )
  if(updatedTeacher){
    res.send( {success:true,updatedTeacher:updatedTeacher} )
  }else{
    res.status(400).send({success:false,message:"no matching teacher found"})
  }
  }catch(err){next(err)}
}

exports.updateManager = async(req,res,next)=>{
  const { id } = req.params;
  try{
  let updatedManager = await UserModel.findByIdAndUpdate( id,req.body,{new:true} )
  if(updatedManager){
    res.send( {success:true,updatedManager:updatedManager} )
  }else{
    res.status(400).send({success:false,message:"no matching manager found"})
  }
  }catch(err){next(err)}
}
