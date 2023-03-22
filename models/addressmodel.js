const mongoose = require('mongoose');
const address = new mongoose.Schema({
      FirstName:{type:String},
      LastName:{type:String},
      PhoneNumber:{type:String},
      Streetaddress:{type:String},
      Locality:{type:String},
      Town_City:{type:String},
      Postcode:{type:String},
      State:{type:String},
      AddressType:{type:String},
      user_id:{type: String}
},
{
    timestamps: true
});

module.exports = mongoose.model('address', address);