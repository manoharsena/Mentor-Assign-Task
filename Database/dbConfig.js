import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongoURL = process.env.DBCONNECTIONSTRING;

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(mongoURL);
    console.log("mongodb connection made successfully....");
    return connection;
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;