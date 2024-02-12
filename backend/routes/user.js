const express = require('express');
const dotenv = require('dotenv').config({path: 'C:/Users/Dhanraj/Documents/Personal Projects/Paytm-Clone/.env'});
const app = express();
const router = express.Router();
const { z } = require("zod");
const { User, Account } = require("../db");
const jwt = require("jsonwebtoken");
const { authMiddleware } = require('../middleware');
const JWT_SECRET = process.env.JWT_SECRET;

app.use(express.json());

// input validation
const zodString = z.string();
const zodPassword = z.string().min(8);

router.put('/', authMiddleware, async (req, res)=>{
    const username = req.username;
    const firstName = req.headers.fname;
    const lastName = req.headers.lname;
    const password = req.headers.password;
    console.log(firstName);
    console.log(lastName);
    let updated = false;
    
    const firstNameValidation = zodString.safeParse(firstName);
    const lastNameValidation = zodString.safeParse(lastName);
    const passwordValidation = zodPassword.safeParse(password);
    
    if(!(firstNameValidation.success && lastNameValidation.success && passwordValidation.success)){
        console.log((firstNameValidation.success));
        console.log((lastNameValidation.success));
        console.log((passwordValidation.success));
        res.status(411).json({message: "Invalid inputs"});
        return;
    }
    if(firstName){
        await User.updateOne({username: username}, {$set:{firstname: firstName}})
        updated = true;
    }
    if(lastName){
        await User.updateOne({username: username}, {$set:{lastname: lastName}})
        updated = true;
    }
    if(password){
        await User.updateOne({username: username}, {$set:{password: password}})
        updated = true;
    }
    if(updated){
        res.status(200).json({message: "details updated"});
    }else{
        res.json({message: "nothing was updated"});
    }
})

router.post('/signup', async (req, res)=>{
    const username = req.body.username;
    const firstName = req.body.firstname;
    const lastName = req.body.lastname;
    const password = req.body.password;

    // Validation
    const usernameValidation = zodString.safeParse(username);
    const firstNameValidation = zodString.safeParse(firstName);
    const lastNameValidation = zodString.safeParse(lastName);
    const passwordValidation = zodPassword.safeParse(password);
    
    if(!(usernameValidation.success && firstNameValidation.success && lastNameValidation.success && passwordValidation.success)){
        res.status(411).json({message: "Invalid inputs"});
    }
    // Verify that the user does not already exist
    const userInDB = await User.findOne({username:username});
    if(userInDB == null){
        const newUser = await User.create({
            username: username,
            firstname: firstName, 
            lastname: lastName,
            password: password
        })
        // signing jwt
        const jwtToken = jwt.sign({username}, JWT_SECRET);
        res.status(202).json({'message': newUser._id});
        // assigning starting balance
        const balance = Math.random()*10000;
        console.log(newUser._id);
        console.log(balance);
        await Account.create({userId:newUser._id, balance: balance});
    }else{
        res.status(411).json({'message': 'a user with this username already exists'});
    }

})

router.post('/signin', async (req, res)=>{
    const username = req.body.username;
    const password = req.body.password;

    // input validation

    const usernameValidation = zodString.safeParse(username);
    if(!usernameValidation.success){
        res.json({message: "Invalid inputs"});
        return;
    }

    // check if the user exists

    const user = await User.findOne({username:username});
    if(user == null){
        // user does not exist
        res.json({message: "User does not exist"});
        return;
    }
    
    // sign jwt

    const token = jwt.sign({username}, JWT_SECRET);
    res.status(200).json({message: token});

})

router.get('/bulk', async (req, res)=>{
    const filter = req.query.filter;
    console.log(filter);
    // const firstNameResults = await User.find({firstname: filter}, {firstname:1, lastname:1, _id:1});
    // const lastNameResults = await User.find({lastname: filter});
    const results = await User.find({
        $or:[{"firstname":filter}, {"lastname":filter}]
    },{firstname:1, lastname:1, _id:1});
    res.json(results);
})

module.exports = router;