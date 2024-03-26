var meal = require("../model/mealtype");
exports.mealtypeDetails = async(req,res)=>{
    try{
        let results = await meal.find()
        res.status(200).send(results)
    }catch{
        res.status(500).send(`internal server error`)
    }
}