const express = require("express");
const path = require("path");
const { createServer } = require("http");
const userRoutes = require("./routes/userRoutes");

require("dotenv").config();
console.log("URI de conexión:", process.env.MONGO_URI);

const connectDB = require("./db");
const setupSocket = require("./socket");

const app = express();
const port = process.env.PORT || 5000;

// Middleware para leer JSON en requests
app.use(express.json()); // <- NECESARIO para manejar datos del frontend como el registro

// Servir archivos estáticos desde la carpeta client
app.use(express.static(path.join(__dirname, "..", "client")));

// Ruta raíz para servir index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client", "index.html"));
});

//Rutas de usuario
app.use("/api/users", userRoutes);

const server = createServer(app);
setupSocket(server);

connectDB()
  .then(() => {
    server.listen(port, () => {
      console.log(`Servidor escuchando en http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error(`Error al conectar a MongoDB: ${error}`);
    process.exit(1);
  });
