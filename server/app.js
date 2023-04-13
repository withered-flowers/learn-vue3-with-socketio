import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5173",
  },
});

io.on("connection", (socket) => {
  console.log("Connected to socket:", socket.id);

  socket.on("create-something", (val) => {
    console.log("Value from client is:", val);

    console.log("Server will emit a response to the client");

    socket.emit(
      "create-something-response",
      `Hello ${val}, how can I help you?`
    );
  });

  socket.on("disconnect", () => {
    console.log("Client disconnect:", socket.id);
  });
});

io.on("disconnect", (socket) => {
  console.log("Server disconnect", socket);
});

httpServer.listen(3000);
