const express= require('express');
const {
    Categories,Deshbord,Swaiper1,Swaiper2,Swaiper3,Swaiper4,Swaiper5
} = require('../data')

const router = express.Router();

router.use(express.json())


router.get('/',(req,res)=>{
    res.json({status:true,Categories})
})    
router.get('/Dashbord',(req,res)=>{
    res.json({status:true,Deshbord})
})  
router.get('/S1',(req,res)=>{
    res.json({status:true,Swaiper1})
}) 
router.get('/S2',(req,res)=>{
    res.json({status:true,Swaiper2})
}) 
router.get('/S3',(req,res)=>{
    res.json({status:true,Swaiper3})
}) 
router.get('/S4',(req,res)=>{
    res.json({status:true,Swaiper4})
}) 
router.get('/S5',(req,res)=>{
    res.json({status:true,Swaiper5})
}) 

module.exports = router;