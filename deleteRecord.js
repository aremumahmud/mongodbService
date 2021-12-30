
var FileRecord = require("./ServerFileRecord.Model.js")

module.exports = function(req, res){
  var {
    FileFolderPath,
    FileRoutePath
  } = req.query
  FileRecord
     .findOneAndRemove({
       FileRoutePath,
       FileFolderPath
     },(err, record)=> {
         if (err){
            res
              .status(404)
              .send(JSON.stringify({
                error : true,
                msg : "error deleting record"
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
