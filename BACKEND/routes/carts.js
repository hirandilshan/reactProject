const router =require("express").Router();


let Cart=require("../models/cart");


router.route("/getItems").get((req,res)=>{
    Cart.find()
    .then((items) =>res.json(items))
    .catch((err) =>res.json(err))
})

router.route("/add").post((req, res) => {
    const { item, price, numOfItems, userName } = req.body;
    const newItem = new Cart({
        item,
        price,
        numOfItems,
        userName
    });

    newItem.save()
    .then(() => res.json("Item added"))
    .catch(err => res.status(400).json('Error: ' + err));
});




router.route("/increse/:id").put(async(req,res)=>{
    let cartId =req.params.id;

    
    const item =req.body.item;
    const price =req.body.price;
    const numOfItems =req.body.numOfItems +1;
    const userName =req.body.userName;

    const updateItems={
        item,
        price,
        numOfItems,
        userName
    }

    const udpate =await Cart.findByIdAndUpdate(cartId,updateItems).then(()=>{
        res.status(200).send({status:"item updated"})   
    }).catch((err)=>{
        res.status(500).send({status:"error in updating data"});  
    })
    
}) 

router.route("/decrese/:id").put(async(req,res)=>{
    let cartId =req.params.id;

    
    const item =req.body.item;
    const price =req.body.price;
    const numOfItems =req.body.numOfItems -1;
    const userName =req.body.userName;

    const updateItems={
        item,
        price,
        numOfItems,
        userName
    }

    const udpate =await Cart.findByIdAndUpdate(cartId,updateItems).then(()=>{
        res.status(200).send({status:"item updated"})   
    }).catch((err)=>{
        res.status(500).send({status:"error in updating data"});  
    })
    
})

router.route("/remove/:id").delete(async(req,res)=>{
    let cartId=req.params.id;
    await Cart.findByIdAndDelete(cartId).then(()=>{
        res.status(200).send({status:"item removed"})
    }).catch((err)=>{
        console.log(err.massage);
        res.status(500).send({status:"Error with delete item",error:err.massage});
    })  
})




module.exports= router;