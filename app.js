
var express = require("express")
var mongoose =require("mongoose")

var updateRecord = require("./updateRecord")
var addRecord = require("./addRecord")
var getRecord = require("./getRecord")
var getAllRecords = require("./getAllRecord")
var deleteRecord = require("./deleteRecord")


var app = express()
app.use(require('body-parser').urlencoded({ extended: false }));
app.listen(process.env.PORT || 2000)

var appl;
var uri = process.env.URI
mongoose.connect(uri)
    .then(res=>{
      console.log(res ,"connected")
       appl=1
   })
   .catch(err=>{console.log(err)})
   
   app.get("/updateRecord", (req, res)=>{
    // res.send("hi")
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
app.get("/",(req,res)=>{res.send("hello guys "+appl)})
