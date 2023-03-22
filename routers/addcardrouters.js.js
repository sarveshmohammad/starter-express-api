const express = require('express');
const protect = require('../middelware/addcarrdmodderware')

const { getaddtocard, postaddtocard, deleteaddtocard } = require("../controllers/addcardcontrollers.js");
const router = express.Router();

router.use(express.json())

router.get('/get', protect, getaddtocard)
router.post('/add', protect, postaddtocard)
router.delete('/:_id', deleteaddtocard)


module.exports = router;