const router =require("express").Router();
let Reservation=require("../models/reservation");


router.route("/book").post((req,res)=>{
    const { date, time, tableNum, userName } = req.body;

    const newReservation =new Reservation({
        date,
        time,
        tableNum,
        userName
    })
    newReservation.save().then(()=>{
        res.json("Booking Sucessful")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/getReservations").get((req,res)=>{
    Reservation.find()
    .then((reservations) =>res.json(reservations))
    .catch((err) =>res.json(err))
})

module.exports= router;