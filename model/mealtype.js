var mongoose = require("mongoose");
const Schema = mongoose.Schema;
var mealSchema = new Schema(
{
    name:String,
    content:String,
    image:String,
    mealtype_id:Number
});
module.exports = mongoose.model("MealType" , mealSchema);