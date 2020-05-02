const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const routes = require("./routes");

const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

io.on("connection", (socket) => {
  console.log("socket: ", socket.id);
  socket.on("messageSend", (data) => {
    console.log(data);
    socket.broadcast.emit("messageReceived", data);
  });
});

server.listen(3333);
