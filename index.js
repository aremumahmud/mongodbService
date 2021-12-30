var mongoose = require("mongoose")
var express = require("express")
var app = express()
var os = require("os")
app.listen(process.env.PORT || 2000)

app.get("/" ,(req,res)=>{
res.send("i am working "+process.pid+".  "+ os.cpus().length)
})
