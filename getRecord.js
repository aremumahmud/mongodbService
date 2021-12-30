var FileRecord = require("./ServerFileRecord.Model.js")

module.exports=function (req ,res){
  var {
    FileFolderPath,
    FileRoutePath
    } = req.query
    
    FileRecord
       .findOne({FileFolderPath,FileRoutePath})
       .exec((err , record)=>{
        if (err){
          res
            .status(404)
            .send(JSON.stringify({
            error : true,
            msg : "error finding record"
          }))
        }else{
          res
            .status(200)
            .send(JSON.stringify({
              error : false,
              record
            }))
        }
      })
}