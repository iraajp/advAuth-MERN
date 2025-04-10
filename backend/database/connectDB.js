import mongoose from "mongoose";


 export const connectDatabase = async () => {
    try {
       const conn = await mongoose.connect(process.env.MONGO_URI)
       console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log("the server is not connected to database error=>",error.message);
        process.exit(1);//failure,0 is success 
        
    }}