const express= require('express');
const {Categories,Westerndresscollections,StylishKurtiCollections,TrendingKurtiCollections,Specialsareecollections} = require('../data')

const router = express.Router();

router.use(express.json())


router.get('/',(req,res)=>{
    res.json({status:true,Categories})
})    
router.get('/WDC',(req,res)=>{
    res.json({status:true,Westerndresscollections})
})  
router.get('/SKC',(req,res)=>{
    res.json({status:true,StylishKurtiCollections})
})
router.get('/TKC',(req,res)=>{
    res.json({status:true,TrendingKurtiCollections})
})
router.get('/SSC',(req,res)=>{
    res.json({status:true,Specialsareecollections})
})  



module.exports = router;