const router =require("express").Router();
let Foods=require("../models/foods");


router.route("/getFoods").get((req,res)=>{
    Foods.find()
    .then((foods) =>res.json(foods))
    .catch((err) =>res.json(err))
})

 
module.exports= router;