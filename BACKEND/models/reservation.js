const mongoose= require("mongoose");

const Schema= mongoose.Schema;
const resSchema =new Schema({
    

    date: {
        type: String,
        required: true
    },

    time: {
        type: String,
        required:true
    },

    tableNum: {
        type: Number,
        required:true
    },

})


const reservation= mongoose.model("reservations",resSchema);
module.exports=reservation;