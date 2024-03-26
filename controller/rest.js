var rest = require("../model/restaurant");
var meals = require("../model/mealtype")

exports.restDetails = async(req,res)=>{
    try{
        let output=await rest.find();
        res.status(200).send(output)
    }catch{
        res.status(500).send(`internal server error`);
    }
}

exports.filtering = async (req, res) => {
    const { location_id, mealtype_id, cuisine_id, lowCost, highCost, sort } = req.body;
    try {
        const finding = {};

        if (location_id) finding.location_id = location_id;
        if (mealtype_id) finding.mealtype_id = mealtype_id;
        if (cuisine_id && cuisine_id.length > 0) {
            finding.cuisine = { $elemMatch: { id: { $in: cuisine_id } } };
        }

        if (lowCost !== undefined && highCost !== undefined) {
            finding.min_price = { $lte: highCost, $gte: lowCost };
        }

        const sorting = {};

        if (sort) {
            sorting.min_price = sort;
        }

        const restaurantNames = await rest.find(finding).sort(sorting).exec();
        
        if (restaurantNames.length === 0) {
            res.json({ message: "No restaurants found with the specified criteria" });
        } else {
            res.json(restaurantNames);
        }
    } catch (err) {
        res.status(500).json({ message: "Internal server error" });
    }
};
