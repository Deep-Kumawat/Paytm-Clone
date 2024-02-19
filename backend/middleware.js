const jwt = require("jsonwebtoken");
require("dotenv").config({path: "C:/Users/Dhanraj/Documents/Personal Projects/Paytm-Clone/.env"})
const JWT_SECRET = process.env.JWT_SECRET;

function authMiddleware(req, res, next){
    let token = req.headers.authorization;
    console.log(`------------------Authorization Header: ${token}--------------------------------`);
    if(!token || !token.startsWith("Bearer ")){
        console.log("middleware: Invalid token!");
        // res.status(403).json({messsage: ""});
    }
    token = token.split(' ')[1];
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.username = decoded.username;
        console.log("verified by middleware good to go from here, no problem in middleware");
        next();
    } catch (error) {
        console.log("bad token!");
        // res.status(403).json({});
        return;
    }
}
module.exports = {
    authMiddleware
}