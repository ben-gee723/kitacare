const KgModel=require("../../model/kgModel")

exports.deleteKg=async(req,res,next)=>{
  try{
    const {id} = req.param;
    const kg= await KgModel.findByIdAndRemove(id)
    if(kg){
      res.send({success:true, message:"kg removed from db"})
    }else{
      res.status(404).send({success:false, message:"no matching kg found"})
    }
  }catch(err){next(err)}
}