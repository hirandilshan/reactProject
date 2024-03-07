const router =require("express").Router();
let User=require("../models/user");
const jwt =require("jsonwebtoken");


router.route("/add").post((req,res)=>{
    
    const firstName =req.body.firstName;
    const lastName =req.body.lastName;
    const email =req.body.email;
    const password =req.body.password;

    const newUser =new User({
        firstName,
        lastName,
        email,
        password
    })
    newUser.save().then(()=>{
        res.json("user added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/checkLogin").post((req,res)=>{
    const email =req.body.email;
    const password =req.body.password;
    User.findOne({email: email})
    .then(user =>{
        if(user){
            if(user.password=== password){
                const token= jwt.sign({email: user.email},"jwt167486",{expiresIn: "1d"})
                res.cookie("token",token, { httpOnly: true })
                res.json("Success")
            
            }else{
                res.status(401).json({ message: "Password is incorrect" });
                
            }
        }else{
            res.status(404).json({ message: "No registered user" });
        }
    })
    .catch(err => {
        console.error("Error:", err);
        res.status(500).json({ message: "Internal Server Error" });
    });

})

const verifyUser = (req, res, next) =>{
    const token =req.cookies.token;
    if(!token){
        return res.json("The token was not availble")
    }else{
        jwt.verify(token,"jwt167486",(err,decoded) =>{
            if(err) return res.json("token wrong")
            next();
        })
    }
}

router.route('/token').get(verifyUser, (req, res) => {

    return res.json("Success")

})

router.route("/display").get((req,res) =>{
    User.find().then((users)=>{
        res.json(users);
    }).catch((err)=>{
        console.log(err);
    })
}) 


router.route("/update/:id").put(async(req,res)=>{
    let userId =req.params.id;
    const {firstName,lastName,email,password}= req.body;

    const updateUser={
        firstName,lastName,email,password
    }

    const udpate =await User.findByIdAndUpdate(userId,updateUser).then(()=>{
        res.status(200).send({status:"user updated"})   
    }).catch((err)=>{
        res.status(500).send({status:"error in updating data"});  
    })
    
}) 

router.route("/delete/:id").delete(async(req,res)=>{
    let userId=req.params.id;
    await User.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status:"User deleted"})
    }).catch((err)=>{
        console.log(err.massage);
        res.status(500).send({status:"Error with delete user",error:err.massage});
    })  
})

router.route("/get/:id").get(async(req,res)=>{
    let userId=req.params.id;
     const user= await User.findById(userId).then((user)=>{
        res.status(200).send({status:"user fetched",user})
    }).catch((err)=>{
        console.log(err.massage);
        res.status(500).send({status:"Error with delete user",error:err.massage});
    
    })
})



module.exports= router;