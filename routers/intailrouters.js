const express= require('express');
const protect = require('../middelware/intailmidderwear')

const { getintail, postintail, deleteintail } = require('../controllers/intailcontrollers');
const router = express.Router(); 
router.use(express.json())

router.get('/get',protect,getintail)    
router.post('/add',protect,postintail)
router.delete('/:_id',protect,deleteintail)

module.exports = router;