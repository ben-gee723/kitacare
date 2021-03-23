exports.isManager=(req,res,next)=>{
    if(req.user.role!=="Manager"){
        let err= new Error("not authorized to access this route")
        next(err)
    }else{
        next()
    }
}