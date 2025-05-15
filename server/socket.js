const io = require("socket.io");

io.on("connection", (socket) => {
  console.log("Nuevo cliente conectado");

  socket.on("disconnect", () => {
    console.log("Cliente desconectado");
  });

  socket.on("message", (message) => {
    console.log(`Mensaje recibido: ${message}`);
    socket.emit("message", `Mensaje recibido: ${message}`);
  });
});
