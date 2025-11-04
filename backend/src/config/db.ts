import mongoose from "mongoose";
import envConfig from "./config";

const connectDB = async () => {
    try{
        mongoose.connection.on("connected", () => {
            console.log("MongoDB connected successfully");
        })
        await mongoose.connect(envConfig.mongodbString as string);
  
    }
    catch(err){
        console.error("Failed to connect to MongoDB", err);
        process.exit(1);
    }
}

export default connectDB;