import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const DBConnection=async()=>{
    try{
        const MONGODB_URL=`mongodb+srv://user:ramanuj@file-sharing.c8rsgjp.mongodb.net/?retryWrites=true&w=majority`;
        await mongoose.connect(MONGODB_URL,{useNewUrlParser:true});  
        console.log('Database connected successfully') 
    }catch(error)
    {
        console.error('error while connecting with the database',error.message);
    }
}
export default DBConnection;