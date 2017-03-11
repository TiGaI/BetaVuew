"use strict";

const express = require('express');
const path = require('path');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const mongoose = require('mongoose');

//login and authentication token
const Authentication = require('./services/authentication');
const passportService = require('./services/passport');
const passport = require('passport');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/auth/facebook',
  passport.authenticate('facebook'));

app.get('/auth/facebook/callback',
  passport.authenticate('facebook'),
  function(req, res) {
    res.redirect('/');
  });

app.get('/auth/linkedin',
  passport.authenticate('linkedin'));

app.get('/auth/linkedin/callback',
  passport.authenticate('linkedin'),
  function(req, res) {
    res.redirect('/');
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
