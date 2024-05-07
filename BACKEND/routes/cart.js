const router =require("express").Router();


let Item=require("../models/cart");


router.route("/getItems").get((req,res)=>{
    Item.find()
    .then((items) =>res.json(items))
    .catch((err) =>res.json(err))
})

router.route("/add").post((req,res)=>{
    
    const item =req.body.item;
    const price =req.body.price;
    const numOfItems =req.body.numOfItems;

    const newItem =new Item({
        
        item,
        price,
        numOfItems
    })
    newItem.save().then(()=>{
        res.json("item added")
    }).catch((err)=>{
        console.log(err);
    })
})




router.route("/increse/:id").put(async(req,res)=>{
    let cartId =req.params.id;

    
    const item =req.body.item;
    const price =req.body.price;
    const numOfItems =req.body.numOfItems++;

    const updateItems={
        item,
        price,
        numOfItems
    }

    const udpate =await Item.findByIdAndUpdate(cartId,updateItems).then(()=>{
        res.status(200).send({status:"item updated"})   
    }).catch((err)=>{
        res.status(500).send({status:"error in updating data"});  
    })
    
}) 

router.route("/decrese/:id").put(async(req,res)=>{
    let cartId =req.params.id;

    
    const item =req.body.item;
    const price =req.body.price;
    const numOfItems =req.body.numOfItems--;

    const updateItems={
        item,
        price,
        numOfItems
    }

    const udpate =await Item.findByIdAndUpdate(cartId,updateItems).then(()=>{
        res.status(200).send({status:"item updated"})   
    }).catch((err)=>{
        res.status(500).send({status:"error in updating data"});  
    })
    
})

router.route("/remove/:id").delete(async(req,res)=>{
    let cartId=req.params.id;
    await Item.findByIdAndDelete(cartId).then(()=>{
        res.status(200).send({status:"item removed"})
    }).catch((err)=>{
        console.log(err.massage);
        res.status(500).send({status:"Error with delete item",error:err.massage});
    })  
})




module.exports= router;