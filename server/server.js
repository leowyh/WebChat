const { addUser, removeUser, getUsers, getCurrentUser } = require("./users");
const http = require("http");
const socketIo = require("socket.io");
const router = require("./routes/router");
const express = require("express");

const app = express();

const port = process.env.PORT || 5000;

app.use(router);
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*",
  },
});

thisRoom = "";

io.on("connection", (socket) => {
  /* ... */
  // When a client connects
  socket.on("join", ({ userName, roomName }) => {
    console.log("New user joined", userName, roomName);
    let newUser = addUser(socket.id, userName, roomName);
    thisRoom = roomName;
    // joins a room
    socket.join(roomName);

    // sends user data upon joining
    io.to(roomName).emit("roomUsers", getUsers(roomName));
  });

  // When a client disconnects
  socket.on("disconnect", () => {
    console.log("Client left");
    const user = removeUser(socket.id);
    console.log(`Removed ${user.userName} from ${user.roomName}`);
    io.to(user.roomName).emit("roomUsers", getUsers(user.roomName));
  });

  // Listen for chatMessage
  socket.on("new message", (msg) => {
    console.log("message received");
    console.log(msg);
    const user = getCurrentUser(socket.id);

    io.to(user.roomName).emit("new message", {
      username: user.userName,
      message: msg,
    });
  });
});

server.listen(port, () => console.log(`Server running on port ${port}`));
