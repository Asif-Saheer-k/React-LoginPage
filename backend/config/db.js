const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://asifsaheer:asifsaheer@cluster0.s7gbb.mongodb.net/?retryWrites=true&w=majority",
   
    );

    console.log(`mongo db connected:${conn.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit();
  }
};
module.exports = connectDB;

