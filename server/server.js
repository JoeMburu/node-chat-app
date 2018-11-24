const express = require('express');
const http = require('http');
const path = require('path');
const socketIO = require('socket.io'); 

const port = process.env.PORT = 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(path.join(__dirname , '../public')));

app.get('/', (req, res) => {
    res.render('index');
})

server.listen(port, () => {
    console.log(`Server is up and running on port ${port}`);
});

io.on("connection", (socket) => {
  console.log('New user connected!');

  // Every other event goes inside
  socket.on('disconnect', () => {
      console.log("Client disconnected from server");
  })
  
})

