const express= require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors= require("cors");
const dotenv= require("dotenv");
const app =express();
const bcrypt =require('bcrypt') 
const jwt =require("jsonwebtoken");
const cookieParsar =require("cookie-parser")
dotenv.config();


const PORT =process.env.PORT || 8070;

app.use(cors({
    origin: ["http://localhost:3000"],
    methods:["GET","POST"],
    credentials: true
}));
app.use(bodyParser.json());
app.use(cookieParsar())

const URL=process.env.MONGODB_URL;

mongoose.connect(URL, {

    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useCreateIndex: true,
    //useFindAndModify: false


});

const connection =mongoose.connection;
connection.once("open", ()=>{
    console.log("Mongodb Connection success!")
})

const userRouter = require("./routes/users.js");
app.use("/user",userRouter);

const reservationRouter = require("./routes/reservations.js");
app.use("/reservation",reservationRouter);

const foodsRouter = require("./routes/foods.js");
app.use("/foods",foodsRouter);

const reviewRouter = require("./routes/reviews.js");
app.use("/review",reviewRouter);

app.listen(PORT,() =>{
    console.log(`Server is up and running on port ${PORT}`);
});

