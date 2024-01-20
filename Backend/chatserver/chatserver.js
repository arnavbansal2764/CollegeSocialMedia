const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const {Room} = require("../db/index")


const { Server } = require("socket.io");
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", async(roomid) => {
    socket.join(roomid);
    const room = await Room.findOne({room:roomid})
    if(room){
      socket.to(roomid).emit(room.chats)
    }
    else{
      socket.to(roomid).emit([])
    }
    
    console.log(`User with ID: ${socket.id} joined room: ${roomid}`);
  });

  socket.on("send_message", (data) => {
    console.log("message recieved from",data.author,"message is",data.message,"at",data.time)
    Room.findOneAndUpdate({room:data.room},{$push:{chats:data}});
    socket.to(data.room).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});

server.listen(3001, () => {
  console.log("SERVER RUNNING");
});