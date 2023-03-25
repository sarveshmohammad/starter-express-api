const mongoose = require('mongoose');
const wishlish = new mongoose.Schema({
    title: {  type: String },
    dis: { type: String },
    price: {type: String},
    disprsent:({type:String}),
    img: {type: String},
    user_id:{type: String}
}, 
{
    timestamps: true
});

module.exports = mongoose.model('wishlish', wishlish);