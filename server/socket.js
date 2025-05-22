const Message = require("./models/message");
const { Server } = require("socket.io");

function setupSocket(server) {
  const io = new Server(server);

  io.on("connection", (socket) => {
    console.log("Cliente conectado");

    socket.on("chat message", async ({ sender, message, room }) => {
      try {
        const newMessage = {
          sender,
          message,
          room,
          createdAt: new Date(),
        };

        console.log("Mensaje recibido:", newMessage);

        io.emit("chat message", newMessage);
      } catch (error) {
        console.error("Error al guardar el mensaje:", error);
      }
    });
  });
}

module.exports = setupSocket;
// This code sets up a Socket.IO server that listens for incoming connections and handles chat messages. When a client connects, it logs a message to the console. When a chat message is received, it emits the message to all connected clients.
// The setupSocket function is exported for use in other parts of the application.
