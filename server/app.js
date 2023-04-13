import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5173",
  },
});

io.on("connection", (socket) => {
  console.log(socket);
});

io.on("disconnect", (socket) => {
  console.log(socket);
});

httpServer.listen(3000);
