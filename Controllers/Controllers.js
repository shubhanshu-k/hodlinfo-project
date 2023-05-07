import crypto from "../db/crypto.js";

export const getTasks = async(req,res)=>{
    try{
        const tm = await crypto.find()
        res.send(tm);
    }catch(error){
        return res.status(500).json(error.message);
    }
}

