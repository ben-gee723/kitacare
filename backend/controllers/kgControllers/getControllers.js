const KgModel=require("../../model/kgModel")

exports.getKgs = async(req,res,next)=>{
  try{
  let kgs=await KgModel.find()
  if(kgs){
    res.send({success:true,kgs:kgs})
  }else{
    res.status(404).send({success:false,message:"no kindergarden found in db"})
  }
  }catch(err){next(err)}
}

exports.getKg = async(req,res,next)=>{
  try{
  const { id } = req.params;
  let kg = await KgModel.findById(id)
  if(kg){
    res.send({success:true,kg:kg})
  }else{
    res.status(404).send({success:false,message:"no matching kindergarden found"})
  }
  }catch(err){next(err)}
}