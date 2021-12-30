var FileRecord = require("./ServerFileRecord.Model.js")


module.exports= function(req,res){
  var {one,two,three,four} = req.query
FileRecord
     .findOneAndUpdate({
         FileFolderPath:one,
         FileRoutePath:two
     },{
         FileFolderPath:three,
         FileRoutePath:four
     },{
       new : true
     })
     .exec((err , record)=>{
       if(!err){
         res.status(200)
        res.send(JSON.stringify(record))
        console.log(record)
       }else{
         res.status(404)
         res.send(JSON.stringify({
           error : true,
           msg : "error updating record"
         }))
       }
     })
}