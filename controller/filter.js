var City = require("../model/restaurant");
exports.filterDetails=async(req,res)=>{
try{
    let fiterByCity = await City.find({city:req.params.city});
    res.status(200).send(fiterByCity);
}catch{
    res.status(500).send(`internal server error`);
}
}

exports.filterDetails=async(req,res)=>{
try{
    let fiterByresId = await City.findById({_id:req.params._id});
    res.status(200).send(fiterByresId);
}catch{
    res.status(500).send(`internal server error`);
}
}
exports.findByLocationId=async(req,res)=>{
    try{
        let findData = await City.find({location_id:req.params.location_id});
        res.status(200).send(findData);
    }catch{
        res.status(500).send(`internal server error`);
}
}
exports.findByMealTypeId=async(req,res)=>{
    try{
        let findData = await City.find({mealtype_id:req.params.mealtype_id});
        res.status(200).send(findData);
    }catch{
        res.status(500).send(`internal server error`);
}
}



