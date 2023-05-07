const {Router}= require("express");
const {getTasks} = require("../Controllers/Controllers");
const router=Router();

router.get('/getTasks',getTasks);

module.exports=router;