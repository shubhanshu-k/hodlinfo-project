import mongoose from "mongoose";
const cryptoSchema = new mongoose.Schema({
    "name":"String",
    "last":"Number",
    "base_unit": "String",
    "sell": "Number",
    "buy": "Number"
});

const crypto = mongoose.model('hodlinfodb', cryptoSchema);
export default crypto;

