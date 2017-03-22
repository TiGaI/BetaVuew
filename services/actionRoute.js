"use strict";
var express = require('express');
var router = express.Router();

//model
const User  = require('../models/models').User;
const Activity= require('../models/models').Activity;
const ActivityAction= require('../models/models').ActivityAction;
const FriendRequest= require('../models/models').FriendRequest;

// Require login past this point.
router.use('/', function(req, res, next){
  if (!req.user) {
    res.redirect('/');
  } else {
    return next();
  }
});

router.post('/sendFriendRequest', function(req, res){

    FriendRequest.find({$and: [{toUser: req.body.toUserID},
      {fromUser: req.body.fromUserID}]}, function(err, friendRequest) {
      if (err) {
          return {err, friendRequest}
      }
    if(!friendRequest){
      User.find({toUser: req.body.toUserID}, function(err, user){
        if(user){
            console('adding a new friend')
            var newFriend = new FriendRequest({
              toUser: req.body.toUserID,
              fromUser: req.body.fromUserID,
              accepted: false
            })
            newFriend.save(function(err){
              if (err) {
                res.send(err)
              } else {
                console.log('Nice, you send a friend request.')
              }
            })
        }else{
          console.log("this user does not exist!");
        }
      });
    }else{
      console.log('you already send request to this friend exist!')
    }
  })
});


router.get('/getNotification', function(req, res){
    FriendRequest.find({toUser: req.body.userID})
     .sort({ createAt: -1})
     .populate('fromUser')
     .select('fromUser').exec( function(err, friendRequests) {
        if (err) {
            return {err, friendRequests}
        }

      if(friendRequests){

          console.log('hoping this is a array: ', friendRequests)

          var userName = friendRequests.map(function(friend){
            let object = {_id: friend._id, firstName: friend.firstName, lastName: friend.lastName, profileImg: friend.profileImg}
             return object
          })
      }else{
        return null
        console.log('No Friend Request notification')
      }
    })
  });

router.post('/acceptFriendRequest', function(req, res){

    FriendRequest.findOneAndRemove({$and: [{toUser: req.body.toUserID},
      {fromUser: req.body.fromUserID}]}, function(err, friendRequest) {
      if (err) {
          return {err, friendRequest}
      }

    if(friendRequest){

      User.find({$or: [{toUser: req.body.toUserID}, {fromUser: req.body.fromUserID}]} ,function(err, users){
        if(users){
            console('I am here inside acceptFriendRequestRoute')
            console.log('users: ', users)


            if(req.body.accepted){
              friendRequest.accepted = req.body.accepted

              console.log("I accepted a friend")
              users.map(function(user){
                if(user._id === req.body.toUserID){
                  user.connection.concat(req.body.fromUserID)
                }else{
                  user.connection.concat(req.body.toUserID)
                }

                user.save(function(err){
                  if (err) {
                    res.send(err)
                  } else {
                    return user
                    console.log('you add a friend')
                  }
                })
              });


            }else{
              friendRequest.accepted = req.body.accepted
              console.log("I rejected a friend")
            }
        }else{
          console.log("this user does not exist!");
        }
      });
    }else{
      console.log('you have not send a friend request him yet.')
    }
  })
});


module.exports = router;
