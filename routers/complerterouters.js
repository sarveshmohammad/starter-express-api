const express= require('express');
const protect = require('../middelware/completemidderwear')

const { getcomplete, postcomplete, deletecomplete } = require('../controllers/completecnttrollers');
const router = express.Router(); 
router.use(express.json())


router.get('/get',protect,getcomplete)    
router.post('/add',protect,postcomplete)
router.delete('/:_id',protect,deletecomplete)


module.exports = router;