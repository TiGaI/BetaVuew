"use strict";

const express = require('express');
const path = require('path');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const mongoose = require('mongoose');

app.use(express.static(path.join(__dirname, 'public')));

// TODO: get events for each category.
//Get all Events for the index page.
app.get('/IndexEvents', function(req, res) {

});


// TODO: Get specific event
//Get specific event.
app.get('/event', function(req, res) {
    // req.body.id


});

// TODO: create event
//create events
app.post('/Conversation', function(req, res) {
    // req.body.id


});


// TODO: get user connection
//Get User Connection.
app.get('/userConnection', function(req, res) {
    // req.body.id


});

// TODO: message
//Get User get the conversation of each connection.
app.get('/Conversation', function(req, res) {
    // req.body.id


});

// TODO: message
//Get User get the conversation of each connection.
app.get('/Conversation', function(req, res) {
    // req.body.id


});


var port = process.env.PORT || 8080;
http.listen(port, function() {
  console.log('Express started. Listening on %s', port);
});

// io.on('connection', function(socket) {
//   console.log('connected');
//   var interactions = interactionsConstructor(socket, game);
//   var socketUser; //the user who sent whatever event is being handled in here //TODO refactor to use
//
//   socket.on('username', function(username) {
//     console.log(username)
//     try {
//       var id = game.addPlayer(username);
//       console.log("after add " + username + " game is", game.players);
//       socket.playerId = id;
//       socketUser = username;
//       socket.broadcast.emit('newUser', username);
//     } catch ( e ) {
//       socket.emit('username', false);
//       console.error(e);
//       socket.emit("errorMessage", e);
//     }
//   });
// });
