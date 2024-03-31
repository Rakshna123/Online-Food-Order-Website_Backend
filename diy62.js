var express = require("express");
var app = express();
var port = 8300;
var cors = require("cors");
var mongoose = require("mongoose");
app.use(cors());
var router = require("./router.js");
app.use(express.json());

app.use("/", router);

mongoose.connect("mongodb+srv://rakshnakb:MongoDBatlas@cluster0.6ybz5av.mongodb.net/")
  .then(success => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log("Server is running");
    });
  })
  .catch(error => {
    console.error("Error connecting to MongoDB:", error);
  });
