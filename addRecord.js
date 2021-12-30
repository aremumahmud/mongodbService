var FileRecord = require("./ServerFileRecord.Model.js")
module.exports= function(req, res){
var {
    serverId,
    FileFolderPath,
    FileRoutePath
  } = req.body
  var fileRecord = new FileRecord()
 //-------test----
 console.log(req.query)
  ///var fileRecord = FileRecord
  //------end-------
  fileRecord.serverId = serverId
  fileRecord.FileRoutePath = FileRoutePath
  fileRecord.FileFolderPath = FileFolderPath
  fileRecord.save((err, record)=>{
    if (err){
      res.status(404)
      res.json({
        "error" : true,
        "msg" : "network filesave err"
      })
    }else {
      res.status(200)
      res.send(JSON.stringify({
           error : false,
           record 
        }))
    }
  })
}
