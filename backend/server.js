const express = require('express');
require('dotenv').config({path: 'C:/Users/Dhanraj/Documents/Personal Projects/Paytm-Clone/.env'})
const cors = require('cors');
const app = express();
const indexRoute = require('./routes/index');
const bodyparser = require('body-parser');

const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(bodyparser.json());
app.use(express.json());

app.use('/api/v1', indexRoute);

app.get('/', (req, res)=>{
    res.json({'message': 'hello'});
})

app.listen(PORT);