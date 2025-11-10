import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import http from "http";
import app from "./app.js";
import connectDB from "./db/db.js";
import {Server} from "socket.io";
import jwt from "jsonwebtoken"
const server = http.createServer(app);
const Port = process.env.PORT || 3000;
connectDB()
  .then(() => {
    server.listen(Port, () => {
      console.log(`Server is running on port ${Port}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
  });

const io = new Server(server);
io.use((socket,next)=>{
  try{
    const token=socket.handshake.auth?.token ||socket.handshake.headers.authorization?.split(' ')[1];
    if(!token){
      return next(new Error('Authorization error'))
    }
    const decoded=jwt.verify(token,process.env.JWT_SECRET)
    socket.user=decoded;
    next()

  }
  catch(err){
    next(err)
  }
})
io.on('connection', socket => {
  console.log("a User Connected")
  socket.on('event', data => { /* … */ });
  socket.on('disconnect', () => { /* … */ });
});
