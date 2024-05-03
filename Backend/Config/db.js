import mongoose from "mongoose";

mongoose.set("strictQuery", false);
export const connectDb = async () => {
  try {
    const conn = await mongoose.connect('mongodb://localhost:27017/ThePlantCabinet', { 
      useNewUrlParser: true, 
      useUnifiedTopology: true, 
    });

    console.log(`MongoDB connected : ${conn.connection.host}`);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
};
