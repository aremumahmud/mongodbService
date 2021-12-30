//------end-------
var fs = require("fs")
var express = require("express")
var mongoose =require("mongoose")
var updateRecord = require("./updateRecord")
var addRecord = require("./addRecord")
var getRecord = require("./getRecord")
var getAllRecords = require("./getAllRecord")
var deleteRecord = require("./deleteRecord")



var app = express()
app.listen(process.env.PORT || 2000)



var txt = fs.readFileSync("mongodb.txt").toString().split('\n')
var password = txt[0].split(" ")[1]
var username = txt[1].split(" ")[1]
var database = txt[2].split(" ")[1]

var uri = `mongodb://FileuploadService:aremu2003@cluster0-shard-00-00.brdt8.mongodb.net:27017,cluster0-shard-00-01.brdt8.mongodb.net:27017,cluster0-shard-00-02.brdt8.mongodb.net:27017/totalcare?ssl=true&replicaSet=atlas-cbfjj2-shard-0&authSource=admin&retryWrites=true&w=majority`
mongoose.connect(uri)
    .then(res=>{
      console.log(res ,"connected")
   })
   .catch(err=>{console.log(err)})
   
   
   app.get("/updateRecord", (req, res)=>{
     //res.send("hi")
     updateRecord(req,res)
   })
   app.post("/addRecord",(req, res)=>{
     addRecord(req ,res)
   })
   app.get("/getRecord",(req ,res)=>{
     getRecord(req ,res)
   })
   app.get("/allRecords",(req, res)=>{
     getAllRecords(req, res)
   })
   app.get("/deleteRecord",(req, res)=>{
   //  res.send("hi")
     deleteRecord(req, res)
   })