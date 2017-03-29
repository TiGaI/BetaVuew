"use strict";
var express = require('express');
var router = express.Router();

//model
const User  = require('../models/models').User;
const FriendRequest= require('../models/models').FriendRequest;
const Message= require('../models/models').Message;

router.post('/getMessage', function(req, res) {

    Message.find({$or: [
            { $and: [{toUser: req.body.toUserID}, {fromUser: req.body.fromUserID}]},
            {$and: [{toUser: req.body.fromUserID}, {fromUser: req.body.toUserID}] } ]}
          )
    .sort('-dateCreated')
    .exec(
    function(err, user) {
            if (err) {
                return {err, user}
            }
            if (user) {

              return user
            } else {
              console.log('fail in getMyActivitiesInfo! no user')
            }
        })
    }
);
//
// router.post('/getNewlyAddedFriend', function(req, res) {
//     User.findById(req.body.userID)
//     .populate('connections', 'firstName lastName profileImg'),
//     function(err, user) {
//             if (err) {
//                 return {err, user}
//             }
//             if (user) {
//               res.send(user)
//               return user
//             } else {
//               console.log('fail in getMyActivitiesInfo! no user')
//               return null
//             }
//         }
//      }
// );

module.exports = router;
