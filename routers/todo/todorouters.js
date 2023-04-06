const express= require('express');
const protect = require('../../middelware/todo/todomidderwear')

const {gettodo, posttodo, deletetodo } = require('../../controllers/todo/todocontrollers');
const router = express.Router(); 
router.use(express.json())


router.get('/',protect,gettodo)    
router.post('/add',protect,posttodo)
router.delete('/:_id',protect,deletetodo)


module.exports = router;