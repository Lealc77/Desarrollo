import mongoose, { mongo } from 'mongoose'

export const connectDB = async () => {
   try{
    await mongoose.connect('mongodb+srv://ejleal2001:TY9YBOI2J4JKT9Ee@cluster0.js2qr.mongodb.net/merndb');
    console.log('DB se conecto');
   } catch (error){
    console.log(error)
   }
};