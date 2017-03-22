"use strict";

const express = require('express');
const path = require('path');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const bodyParser = require('body-parser');
const Activity = require('./models/models').Activity

const mongoose = require('mongoose');
var connect = process.env.MONGODB_URI;
mongoose.Promise = global.Promise;
mongoose.connect(connect);

var compression = require('compression');
//linking file

// var authRoute = require('./services/authRoute');
// var activityRoute = require('./services/activityRoute');
// var messageRoute = require('./services/messageRoute');
// var actionRoute = require('./services/actionRoute');


app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false}));

app.use(bodyParser.json());

// app.use('/', authRoute);
// app.use('/', activityRoute);
// app.use('/', messageRoute);
// app.use('/', actionRoute);



// TODO: create event
//create events
app.post('/conversation', function(req, res) {
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




var port = process.env.PORT || 8080;
http.listen(port, function() {
  console.log('Express started. Listening on %s', port);
});


app.post('/createEvent', function(req, res){
  console.log('faknflnalanflaneljngalnelanna');
  var activityObject = req.body.activity;
  console.log('body',req.body)
  var activity = new Activity(activityObject);
  activity.save(function(err) {
  if (err) throw err;
  console.log('User created!');
});
})

app.get('fetchData', function(req, res){
  Activity.find().sort({startTime: 1}).skip(0).limit(10).exec(function(err, activities){
    if (err) {
      console.log(err)
    } else {
      res.json({
        activities: activities
      })
    }
  })
})



io.on('connection', (socket) => {
  console.log('A client just joined on');
});
