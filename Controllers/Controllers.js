const Crypto = require('../db/crypto');
module.exports.getTasks= async (req,res)=>{
    const tm = await Crypto.find()
    res.send(tm)
    }