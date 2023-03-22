const jwt = require("jsonwebtoken")
const mongodb = require('mongodb');
const address = require('../models/addressmodel');
const asyncHandler = require('express-async-handler');

const addressget = async (req, res) => {
    let data = await address.find({ user_id: req.user});
    
    if(!data.length){
        res.status(200).json({ status: false, massage: "address is empty"})
    }
    console.log("====>", data);
    res.status(200).json({ status: true, massage: data})
    }
    
const addresspost = async (req, res) => {

    const { FirstName, LastName, PhoneNumber, Streetaddress, Locality, Town_City, Postcode, State, AddressType,} = req.body
    if (!FirstName && !LastName && !PhoneNumber && !Streetaddress && !Locality && !Town_City && !Postcode && !State && !AddressType) {
        res.status(400).json({ message: "Please add all Filed"})
    }
    let data = await address.create({ 
        FirstName, 
        LastName, 
        PhoneNumber, 
        Streetaddress, 
        Locality, 
        Town_City, 
        Postcode, 
        State, 
        AddressType,
        user_id:req.user

    });
    console.log("====>", data);
    res.status(200).json(data)
}

const deleteaddress =  async(req,res)=>{
   
    let findid = await address.findById(req.params._id);
    if(!findid){
        res.status(400);
        res.send("user not found");
    }
        await findid.remove();
       
    res.status(200).json({message : `delete data ${req.params.id}`});
 }

module.exports = {
    addressget,
    addresspost,
    deleteaddress
}