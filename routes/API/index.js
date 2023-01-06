const router = require('express').Router();
// const userAuth = require('./userAuth')

module.exports=router;

router.use('./home', homeRoutes);



