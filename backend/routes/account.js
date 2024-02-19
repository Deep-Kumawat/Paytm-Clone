const express = require('express');
const { authMiddleware } = require('../middleware');
const { User, Account } = require('../db');
const mongoose = require("mongoose");
const router = express.Router();

router.get('/', (req, res)=>{
    res.json({message: "hello from account route"});
})

router.get('/balance', authMiddleware, async (req, res)=>{
    const username = req.username;
    const result = await User.find({username: username}, {_id:1});
    console.log("result: " + result);
    const balanceResult = await Account.findOne({userId: result}, {balance:1});
    res.json({balance: balanceResult.balance});
})

router.post('/transfer', authMiddleware, async (req, res)=>{
    const { to, amount } = req.body;
    const username = req.username;

    
    const fromUserId = await User.findOne({username: username}, {_id:1});
    const toUserId = await User.findOne({username: to}, {_id:1});
    // check if there is sufficient balance
    const session = await mongoose.startSession();
    session.startTransaction();
    const fromAccount = await Account.findOne({userId: fromUserId}).session(session);
    const toAccount = await Account.findOne({userId: toUserId}).session(session);
    if(fromAccount.balance < amount){
        await session.abortTransaction();
        res.status(400).json({message: "Insufficient balance"});
        return;
    }
    // const fromAccount = await User.findOne({username: username});
    
    
    try {
        console.log(fromAccount);
        console.log(toAccount);
        await Account.updateOne({_id: fromAccount._id}, {$inc: {balance: -amount}}).session(session);
        await Account.updateOne({_id: toAccount._id}, {$inc: {balance: amount}}).session(session);
    } catch (error) {
        res.status(400).json({message: "An error occured during the transaction"});
        console.log(error);
        return;
    }

    session.commitTransaction();
    // session.endSession();

    res.status(200).json({message: "Transfer successful"});
    
})

module.exports = router