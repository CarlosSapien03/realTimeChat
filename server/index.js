const express = require("express");
const path = require("path");
require("dotenv").config();
const connectDB = require("./db");

const app = express();
const port = process.env.PORT || 5000;

// Servir archivos estáticos desde la carpeta client
app.use(express.static(path.join(__dirname, "..", "client")));

// Ruta raíz para servir index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client", "index.html"));
});

connectDB()
  .then(() => {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en el puerto ${PORT}`);
    });
  })
  .catch((error) => {
    console.error(`Error al conectar a MongoDB: ${error}`);
    process.exit(1);
  });
