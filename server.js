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

app.post('/facebook/login', function(req, res){
  User.findOne({email: req.body.emails[0].value}, function(err, user) {
          if (err) {
              return err;
          }
          if (!user) {
              var fullName = req.profile.displayName.split(' ');
              var firstName = fullName[0];
              var lastName = fullName[fullName.length - 1];
              user = new User({
                  firstName: firstName,
                  lastName: lastName,
                  email: req.profile.emails[0].value,
                  profileImg: req.profile.photos ? req.profile.photos[0].value : 'http://shurl.esy.es/y'
              });
              user.save(function(err) {
                  if (err) console.log(err);
                  return user;
              });
          }
      });
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
