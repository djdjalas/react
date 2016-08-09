var express = require('express');

var app = express();

app.use(express.static('./public'));
app.use(express.static('./node_modules/bootstrap/dist'));

var server = app.listen(3000);

var io = require('socket.io').listen(server);

var connections = [];

var title = "Untitled presentation";

io.sockets.on('connection', function(socket){
  console.log('Number of sockets connected = %s', connections.length);
  connections.push(socket);

  console.log("emitting");
  socket.emit('welcome', {
    title : title
  });

  socket.once('disconnect', function() {
    connections.splice(connections.indexOf(socket), 1);
    socket.disconnect();
    console.log(socket.id + " has been disconnected and remaininign sockets = " + connections.length);
  });

});

console.log("polling serving running port 3000");
