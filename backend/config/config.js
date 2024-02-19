import mongoose from "mongoose";
require("colors");

const connectDb = async () => {
  try {
    const conn = await mongoose
  .set("strictQuery", false)
  .connect(process.env.MONGO_URI)
      console.log(`Mongodb Connected ${conn.connection.host}`.yellow)
  } catch (error) {
    console.error(`Error : ${error.message}`.red);
    process.exit(1);
  }
};

module.exports = connectDb;