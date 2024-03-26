var express = require("express");
var app = express();
var port = 8300;
var cors = require("cors");
var mongoose = require("mongoose");
app.use(cors())
var router = require("./router.js");
app.use(express.json());

app.use("/",router);


mongoose.connect("mongodb+srv://rakshnakb:MongoDBatlas@cluster0.6ybz5av.mongodb.net/",{useNewUrlParser:true})
.then(success=>{
    console.log("connected");
    app.listen(port,()=>{
        console.log("server is running");
    });
}).catch(error=>{
    console.log("error occur");
});
