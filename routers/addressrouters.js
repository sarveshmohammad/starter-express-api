const express= require('express');
const protect = require('../middelware/addressmidderware')

const {addressget, addresspost, deleteaddress} = require("../controllers/addresscontrollers");
const router = express.Router();
router.use(express.json())


router.get('/get',protect,addressget)    
router.post('/add',protect,addresspost)
router.delete('/:_id',protect,deleteaddress)


module.exports = router;