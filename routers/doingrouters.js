const express= require('express');
const protect = require('../middelware/doingmidderwear')

const { getdoing, postdoing, deletedoing } = require('../controllers/doingconttrollers');
const router = express.Router(); 
router.use(express.json())


router.get('/get',protect,getdoing)    
router.post('/add',protect,postdoing)
router.delete('/:_id',protect,deletedoing)


module.exports = router;