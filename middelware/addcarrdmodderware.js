const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const addcard = require('../models/addcardmodel')

const protect = asyncHandler(async (req,res,next)=>{
    let token
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            //get token from header
            token = req.headers.authorization.split(' ')[1]
            // Verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            console.log(decoded);
            // Get user from the token
            req.user =decoded.id
            next()
        }
        catch (error) {
            console.log(error);
            res.status(401).json({error:"Not authorized"})
          //  throw new Error('Not authorized')
        }
    }
    if(!token) {
        res.status(401).json({error:'not authorized token'})
        //throw new Error('not authorized token')
    }
})

module.exports = protect