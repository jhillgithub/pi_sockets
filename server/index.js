const path = require('path');
const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

var app = express();
app.use(express.static(path.join(__dirname, '..', 'client', 'build')));
const server = http.createServer(app);
const io = socketIo(server);

app.get('/', function(req, res){
  res.sendFile('index.html');
});

io.on('connection', socket => {
  console.log('a user connected');
  socket.emit("FromAPI", "test2");
});

server.listen(3000, function(){
  console.log('listening on *:3000');
});
