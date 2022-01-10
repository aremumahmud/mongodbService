var FileRecord = require("./ServerFileRecord.Model.js")
var testrec = require("./testdb")

module.exports = function(FileFolderPath,FileRoutePath){
  var fileRecord = testrec//new FileRecord()
 //-------test----
  ///var fileRecord = FileRecord
  //------end-------
  return new Promise((res,rej)=>{
  fileRecord.FileRoutePath = FileRoutePath
  fileRecord.FileFolderPath = FileFolderPath
  fileRecord.save((err, record)=>{
    if (err){
      res({
        error : true,
        msg : "network filesave err"
      })
    }else {
      res({
           error : false,
           record 
        })
    }
  })
})
}
