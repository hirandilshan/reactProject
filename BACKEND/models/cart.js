const mongoose= require("mongoose");

const Schema= mongoose.Schema;
const itemSchema =new Schema({

    item: {
        type: String,
        required:true
    },

    price: {
        type: Number,
        required:true
    },
    
    numOfItems: {
        type: Number,
        required:true
    },

    userName: {
        type: String,
        required: true
    }

})




const cart= mongoose.model("carts",itemSchema);
module.exports=cart;