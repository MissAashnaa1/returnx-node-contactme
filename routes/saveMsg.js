const express = require('express');
const router = express.Router();
const ContactMe = require('../models/ContactMe');

router.post('/', async (req,res)=>{
   
    let obj = req.body;
    // console.log(obj)
    // let user=req.query.username;
    // console.log(currUser,"<<<<<")

    // let theMsg = await ContactMe.findOne({ name:obj.name});
    // console.log(theMsg,"<< the obj");
    // if(theMsg){
    //     console.log("user already exists");
    //     // console.log("signupjs if")
    //     res.json({error:true, msg:"User already exists"});
    //     return;
    // }
   
    // let obj = {
    //     name: req.body.name,
    //     email: req.body.email,f
    //     message: req.body message,
    // }

    if(obj.name == "" || obj.email== "" || obj.message == ""){
        res.json({error:true, msg:"All field required!"});
        return;
    }

    obj = new ContactMe(obj);
    obj.save();

    res.json({msg:"Message saved succesfully.", success:true})
})

module.exports = router;

