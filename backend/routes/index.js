const express = require('express');
require('dotenv').config({path: '/home/deep/Deep/100x Devs/projects/paytm/.env'});

const app = express();
const userRoute = require('./user');
const router = express.Router();


app.use(express.json());

router.use('/user', userRoute);

router.get('/', (req, res)=>{
    res.json({'message': 'hello from api/v1'});
})


module.exports = router;