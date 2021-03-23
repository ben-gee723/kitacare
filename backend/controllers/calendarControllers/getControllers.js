const UserEvent = require("../../model/calendarModel");

exports.getAllEvents = async (req, res, next) => {
  try {
    let event = await UserEvent.find();
    res.send({ success: true, event });
  } catch (err) {
    next(err);
  }
};

exports.getSingleEvent = async(req,res,next)=>{
  try{
  const { id } = req.params;
  let event = await UserEvent.findById(id)
  if(event){
    res.send({success:true,event:event})
  }else{
    res.status(404).send({success:false,message:"no matching event found"})
  }
  }catch(err){next(err)}
}
