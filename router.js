var express = require("express");
var router = express.Router();
const jwt = require("jsonwebtoken");
const SECRET_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MTA1MDg5MjF9.ee5tgvMUF_AjJ2oV4OrtnrI3IdHiLpX1ZEE-9H905B8";

var restaurant = require("./controller/rest");
router.get("/getAllRestaurants" , restaurant.restDetails);


var location = require("./controller/loc");
router.get("/getAllLocation" , location.locationDetails);

var meal = require("./controller/meal");
router.get("/getAllMealTypes" , meal.mealtypeDetails);

var city = require("./controller/filter");
router.get("/restBycity/:city" , city.filterDetails);
router.get("/restById/:_id" , city.filterDetails);
router.get("/locationId/:location_id" , city.findByLocationId);
router.get("/mealTypeId/:mealtype_id" , city.findByMealTypeId);

var userDetails = require("./controller/user");
router.post("/signup",userDetails.signup);
router.post("/signin" , userDetails.signin);

router.post("/filteroptions" , restaurant.filtering);

var menuApi = require("./controller/menuItem");
router.get("/getmenuList/:name",menuApi.MenuApi);

router.post("/generateToken", (req, res) => {
    // Assuming req.body contains user information (e.g., username, user id, etc.)
    const userData = req.body;

    // Generate JWT token using the provided user data and the secret key
    const token = jwt.sign(userData, SECRET_KEY);

    // Send the generated token as a response
    res.json({ token });
});

module.exports=router;
