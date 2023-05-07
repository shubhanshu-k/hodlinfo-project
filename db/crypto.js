const mongoose = require('mongoose');
const cryptoSchema = new mongoose.Schema({
    "name":"String",
    "last":"Number",
    "base_unit": "String",
    "sell": "Number",
    "buy": "Number"
});
module.exports = mongoose.model("hodlinfodb",cryptoSchema);