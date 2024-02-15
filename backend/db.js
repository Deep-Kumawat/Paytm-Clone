const mongoose = require('mongoose');
require('dotenv').config({path: '/home/deep/Deep/Projects/Paytm-Clone/.env'});
async function main(){
    await mongoose.connect(process.env.DATABASE_URL);
}
main();
const userSchema = new mongoose.Schema({
    username: {
        type: String, 
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 1,
        maxLength: 56
    },
    firstname: {
        type: String, 
        required: true,
        trim: true,
        lowercase: true,
        maxLength: 56
    },
    lastname: {
        type: String, 
        required: true,
        trim: true,
        lowercase: true,
        maxLength: 56
    },
    password: {
        type: String, 
        required: true,
        trim: true,
        lowercase: true,
        minLength: 8,
        maxLength: 56
    },
});

const accountsSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    },
});


const User = mongoose.model('User', userSchema);
const Account = mongoose.model('Account', accountsSchema);


module.exports = {
    User,
    Account
};