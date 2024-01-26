import mongoose from "mongoose";

async function main(){
    await mongoose.connect('mongodb+srv://deep:root@cluster0.i0ahig5.mongodb.net/');
}