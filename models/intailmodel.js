const mongoose = require('mongoose');
const intail = new mongoose.Schema({
    title: {  type: String },
    dis: { type: String },
    user_id:{type: String}
    
}, 
{
    timestamps: true
});

module.exports = mongoose.model('intail', intail);