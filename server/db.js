const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB conectado");
  } catch (error) {
    console.error("Error de conexión a MongoDB", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
// This code connects to a MongoDB database using Mongoose. It uses an environment variable for the connection string and handles errors during the connection process. If the connection is successful, it logs a message to the console. If there is an error, it logs the error and exits the process with a failure code.
