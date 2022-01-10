var process1 = require("./upload1")


module.exports= function(req, res){
var datastr = req.query.data
var space = req.query.space

var data = JSON.parse(datastr)
console.log(data)
var ArrayTobeProcessed = data.processed.map(record=>{
  return process1(space,record.file)
})
Promise.all(ArrayTobeProcessed).then(resp=>{
  res.send(JSON.stringify(resp))
})
  
}


//localhost:3000/addRecord?data=["sup","hello","fuck"]&space=dtahy
