import mongoose from "mongoose";

let isConnected = false; //this is a variable to check if the mongoose is connected.

export const connectToDB=async()=>{
    mongoose.set('strictQuery',true);

    if(!process.env.MONGODB_URL)return console.log("MONGODB_URL not found");
    if(isConnected) return console.log("Already connected to MONGODB");

    try {
        await mongoose.connect(process.env.MONGODB_URL);

        isConnected= true;

        console.log('Connected to MongoDB');
    } catch (e) {
        
    }
}