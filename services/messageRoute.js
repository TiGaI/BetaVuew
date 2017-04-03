"use strict";
var express = require('express');
var router = express.Router();

//model
const User  = require('../models/models').User;
const FriendRequest= require('../models/models').FriendRequest;
const Message= require('../models/models').Message;

router.post('/getMessage', function(req, res) {

  console.log(req.body)

    Message.find({$or: [
            { $and: [{toUser: req.body.toUserID._id}, {fromUser: req.body.fromUserID}]},
            {$and: [{toUser: req.body.fromUserID}, {fromUser: req.body.toUserID._id}] } ]}
          )
    .sort('-dateCreated')
    .exec(
    function(err, messages) {
      console.log(messages, 'this is the message')
            if (err) {
                return {err, messages}
            }
            if (messages) {

              res.send(messages)
              return JSON.stringify(messages)
            } else {
              res.send(messages)
              console.log('fail in getMyActivitiesInfo! no user')
            }
        })
    }
);

router.post('/sendMessage', function(req, res) {
  console.log(req.body, ' is the req.body of sendMessage in messageRoute')
  var newMessage = new Message({
      body: req.body.message[0].text,
      toUser: req.body.toUserID,
      fromUser: req.body.fromUserID,
      dateCreated: new Date()
  });
  newMessage.save(function(err, message) {
      if (err){
        console.log(err);
        return {err, message}
      }
      else{
        res.send(message)
        console.log('message sended!')
        return {err, message}
      }

  });
});

router.post('/getNewlyAddedFriend', function(req, res) {
    console.log('INSIDE GETNEWFRIEND ROUTE', req.body.toUserID);
    User.findById(req.body.toUserID)
    .populate('connections', 'firstName lastName profileImg').exec(
    function(err, user) {
            if (err) {
              console.log(err);
                return {err, user}
            }
            if (user) {
              res.send(user)
              return user
            } else {
              console.log('fail in getMyActivitiesInfo! no user')
              return null
            }
        })
     }
);


router.post('/getLastMessage', function(req, res) {
    Message.findOne({$or: [
            { $and: [{toUser: req.body.toUserID}, {fromUser: req.body.fromUserID}]},
            {$and: [{toUser: req.body.fromUserID}, {fromUser: req.body.toUserID}] } ]}
          )
    .sort('-dateCreated')
    .exec(
    function(err, message) {
            if (err) {
                console.log(err)
                res.send(err)
                return {err, message}
            }
            if (message) {
              console.log(message)
              res.send(message)
              return message
            } else {
              console.log('fail in getMyActivitiesInfo! no user')
              res.send(err)
              return null
            }
        })
    }
);

module.exports = router;
