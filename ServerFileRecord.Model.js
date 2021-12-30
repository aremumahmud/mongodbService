var mongoose = require("mongoose")
var schema = mongoose.Schema
var ServerFileRecord = new schema({
  serverId : String,
  FileRoutePath :{
    type : String,
    unique : true
  } ,
  FileFolderPath : String
})

module.exports = mongoose.model("ServerFileRecord", ServerFileRecord)