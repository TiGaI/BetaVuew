"use strict";

var express = require('express');
var path = require('path');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var _ = require('underscore');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  res.json({
    success: true
  });
});


io.on('connection', function(socket) {
  console.log('connected');
  var interactions = interactionsConstructor(socket, game);
  var socketUser; //the user who sent whatever event is being handled in here //TODO refactor to use

  socket.on('username', function(username) {
    console.log(username)
    try {
      var id = game.addPlayer(username);
      console.log("after add " + username + " game is", game.players);
      socket.playerId = id;
      socketUser = username;
      socket.broadcast.emit('newUser', username);
    } catch ( e ) {
      socket.emit('username', false);
      console.error(e);
      socket.emit("errorMessage", e);
    }
  });
});

var port = process.env.PORT || 8080;
http.listen(port, function() {
  console.log('Express started. Listening on %s', port);
});