const express = require('express');
require('dotenv').config({path: '/home/deep/Deep/100x Devs/projects/paytm/.env'})
const cors = require('cors');
const app = express();
const indexRoute = require('./routes/index');

app.use(cors());
app.use(bodyparser.json());
app.use(express.json());

app.use('/api/v1', indexRoute);

app.get('/', (req, res)=>{
    res.json({'message': 'hello'});
})

app.listen(process.env.PORT);