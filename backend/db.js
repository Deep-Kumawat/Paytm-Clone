const mongoose = require('mongoose');
require('dotenv').config({path: '/home/deep/Deep/100x Devs/projects/paytm/.env'});
async function main(){
    await mongoose.connect(process.env.DATABASE_URL);
}
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
    firstName: {
        type: String, 
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 1,
        maxLength: 56
    },
    lastName: {
        type: String, 
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 1,
        maxLength: 56
    },
    password: {
        type: String, 
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 8,
        maxLength: 56
    },
});

const User = mongoose.model('User', userSchema);


module.exports = {
    User
};