const router =require("express").Router();
let Reservation=require("../models/reservation");


router.route("/book").post((req,res)=>{
    
    const date =req.body.date;
    const time =req.body.time;
    const tableNum =req.body.tableNum;

    const newReservation =new Reservation({
        date,
        time,
        tableNum
    })
    newReservation.save().then(()=>{
        res.json("Booking Sucessful")
    }).catch((err)=>{
        console.log(err);
    })
})
module.exports= router;