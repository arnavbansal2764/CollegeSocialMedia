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
    origin: ["http://localhost:5174","http://localhost:5173"],  
    methods: ["GET", "POST"],
  },
});
let initial_chats=[];
io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", async(roomid) => {
    socket.join(roomid);
    const room = await Room.findOne({room:roomid})
    if(room){
      console.log("initial chats are",room.chats)
      socket.to(roomid).emit("initial_chats",room.chats)
      initial_chats=room.chats;
    }
    else{
      await Room.create({room:roomid,chats:[]})
      console.log("initial chats are empty")
      socket.to(roomid).emit("initial_chats",[])
    }
    
    console.log(`User with ID: ${socket.id} joined room: ${roomid}`);
  });

  socket.on("send_message", async (data) => {
    console.log("message recieved from",data.author,"message is",data.message,"at",data.time)
    await Room.findOneAndUpdate({room:data.room},{$push:{chats:data}}).exec();
    initial_chats=[...initial_chats,data]
    console.log("chat saved",data)
    socket.to(data.room).emit("receive_message", initial_chats);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});

server.listen(3001, () => {
  console.log("SERVER RUNNING");
});
