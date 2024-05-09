const mongoose= require("mongoose");

const Schema= mongoose.Schema;
const resSchema =new Schema({
    

    date: {
        type: Date,
        required: true
    },

    time: {
        type: String,
        required:true
    },

    tableNum: {
        type: String,
        required:true
    },
    userName: {
        type: String,
        required: true
    }

})


const reservation= mongoose.model("reservations",resSchema);
module.exports=reservation;