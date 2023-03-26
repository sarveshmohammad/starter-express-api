const express= require('express');
const {Categories,Westerndresscollections,StylishKurtiCollections,TrendingKurtiCollections,Specialsareecollections,FashionSareeCollections,
    TopSellingKurti,LongKurtiCollections,TopSareeCollectins,WomensSareeCollections,
    DressesforYou,WesternDressesForWomen,BridalWeddingCollection,
    StellarStylesForHim} = require('../data')

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
router.get('/FSC',(req,res)=>{
    res.json({status:true,FashionSareeCollections})
}) 
router.get('/TSK',(req,res)=>{
    res.json({status:true,TopSellingKurti})
}) 
router.get('/LKC',(req,res)=>{
    res.json({status:true,LongKurtiCollections})
}) 
router.get('/TSC',(req,res)=>{
    res.json({status:true,TopSareeCollectins})
}) 
router.get('/WSC',(req,res)=>{
    res.json({status:true,WomensSareeCollections})
}) 
router.get('/DFY',(req,res)=>{
    res.json({status:true,DressesforYou})
}) 
router.get('/WDF',(req,res)=>{
    res.json({status:true,WesternDressesForWomen})
}) 
router.get('/BWC',(req,res)=>{
    res.json({status:true,BridalWeddingCollection})
}) 
router.get('/SSFH',(req,res)=>{
    res.json({status:true,StellarStylesForHim})
}) 




module.exports = router;