const express = require('express');
require('dotenv').config({path: '/home/deep/Deep/100x Devs/projects/paytm/.env'});
const app = express();
const router = express.Router();

app.use(express.json());

router.get('/', (req, res)=>{
    res.json({'message': 'hello from api/v1'});
})

// app.listen(process.env.PORT, ()=>{
//     console.log(`listening at port: ${process.env.PORT}`)
// });

module.exports = router;