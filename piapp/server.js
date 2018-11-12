const path = require('path');
const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const axios = require("axios");

const PORT = process.env.PORT || 3000;
const apiKey = process.env.apiKey;
console.log(apiKey);

var app = express();
app.use(express.static(path.join(__dirname, 'build')));
const server = http.createServer(app);
const io = socketIo(server);

const url = `https://api.darksky.net/forecast/${apiKey}/37.8267,-122.4233`;

app.get('/', function(req, res){
  res.sendFile('index.html');
});

io.on('connection', socket => {
  console.log('a user connected');
  getWeather(socket);
  // socket.emit("FromAPI", "test");
});

const getWeather = async socket => {
  try {
    console.log("fetching data...")
    const res = await axios.get(url);
    socket.emit("FromAPI", res.data.currently.temperature);
    console.log(`Current Temperature: ${res.data.currently.temperature}`);
  } catch(err) {
    console.log("Error Fetching Current Temperature");
    // console.log(err);
  }
}

server.listen(PORT, function(){
  console.log(`listening on *:${PORT}`);
});
