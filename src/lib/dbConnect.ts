"use server";
import mongoose from "mongoose";
const connection = {} as any;
export const connectToDB = async () => {
  try {
    if (connection.isConnected) return;
    const db = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    connection.isConnected = db.connections[0].readyState;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};
