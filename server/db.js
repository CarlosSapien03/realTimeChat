const mongoose = require("mongoose");
rerquire("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

module.exports = connectDB;
// This code connects to a MongoDB database using Mongoose. It uses an environment variable for the connection string and handles errors during the connection process. If the connection is successful, it logs a message to the console. If there is an error, it logs the error and exits the process with a failure code.
