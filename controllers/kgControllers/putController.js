const KgModel=require("../../model/kgModel")

exports.updateKg = async(req,res,next)=>{
  const { id } = req.params;
  try{
  let updatedKg = await KgModel.findByIdAndUpdate( id,req.body,{new:true} )
  if(updatedKg){
    res.send( {success:true,updatedKg:updatedKg} )
  }else{
    res.status(400).send({success:false,message:"no matching kindergarden found"})
  }
  }catch(err){next(err)}
}