import mongoose from "mongoose"

// Connecting a database
export const connectdb = async ()=>{
    try {
      const databaseObj = await mongoose.connect(process.env.MONGO_URI.toString(), {
        dbName: "Database_API",
      });
      console.log(`Database connected at : ${databaseObj.connection.port}`);
    } catch (error) {
      console.log(error);
    }
  }
