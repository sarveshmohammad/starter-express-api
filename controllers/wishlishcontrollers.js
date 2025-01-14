const jwt = require("jsonwebtoken")
const mongodb = require('mongodb');
const wishlish = require('../models/wishilishmodel');
const asyncHandler = require('express-async-handler');

const getwishlish = async (req, res) => {
    let data = await wishlish.find({ user_id: req.user});
    
    if(!data.length){
        res.status(200).json({ status: false, massage: "cart is empty"})
    }
    console.log("====>", data);
    res.status(200).json({ status: true, massage: data})
    
    }
    


const postwishlish = async (req, res) => {

    const { title, dis, price,img} = req.body
    if (!title && !dis && !price && !img ) {
        res.status(400).json({ message: "Please add all Filed" })
    }
    let data = await wishlish.create({ 
        title,
        dis,
        img,
        price,
        user_id:req.user

    });
    console.log("====>", data);
    res.status(200).json(data)
}

const deletewishlish=  async(req,res)=>{
   
    let findid = await wishlish.findById(req.params._id);
    if(!findid){
        res.status(400);
        res.send("user not found");
    }
    const deletecart =  await wishlish.deleteMany({_id: findid._id});
       
    res.status(200).json({message : `delete data ${req.params.id}`});
 }

module.exports = {
    getwishlish,
    postwishlish,
    deletewishlish
}