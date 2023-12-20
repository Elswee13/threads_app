import mongoose from "mongoose";

let isConnected = false; //this is a variable to check if the mongoose is connected.

export const connectToDB=async()=>{
    mongoose.set('strictQuery',true);

    if(!process.env.MONGODB_URL)return console.log("MONGODBURL is not connected");
}