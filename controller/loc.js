var loc = require("../model/location");

exports.locationDetails=async(req,res)=>{
    try{
     let result=await loc.find();
        res.status(200).send(result)
    }catch{
         res.status(500).send(`internal server error`)
    }
 }