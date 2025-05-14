//Conexión a la base de datos
require("dotenv").config();
console.log("URL de MongoDB:", process.env.MONGO_URI);
const express = require("express");
const connectDB = require("./db");

const app = express();

connectDB()
  .then(() => {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Servidor corriendo correctamente en el puerto ${PORT}`); //por ende, MongoDB también está conectado, porque el servidor solo se inicia después de conectar la DB.
      console.log("MongoDB conectado");
    });
  })
  .catch((error) => {
    console.error(`Error al conectar a MongoDB:${error}`);
    process.exit(1);
  });
