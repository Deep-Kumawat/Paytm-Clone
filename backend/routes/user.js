// const express = require('express');
// const app = express();
// const router = express.Router();

// app.use(express.json());

// router.get('/', (req, res)=>{
//     console.log("hello from user.js");
//     res.json({'message': 'hello from api/v1/user'});
// })

// module.exports = router;

const express = require('express');
const app = express();
const router = express.Router();

app.use(express.json());

router.get('/', (req, res)=>{
    res.json({'message': 'hello from api/v1/user'});
})


module.exports = router;