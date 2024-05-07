const mongoose= require("mongoose");

const Schema= mongoose.Schema;
const itemsSchema =new Schema({

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
    }

})


const items= mongoose.model("items",itemsSchema);
module.exports=items;