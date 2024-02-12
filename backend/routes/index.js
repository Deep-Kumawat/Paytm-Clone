const express = require('express');
const userRoute = require('./user');
const accountRoute = require('./account');

const router = express.Router();

router.use('/user', userRoute);
router.use('/account', accountRoute);

router.get('/', (req, res)=>{
    res.json({'message': 'hello from api/v1'});
})


module.exports = router;