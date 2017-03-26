"use strict";
var express = require('express'),
aws = require('aws-sdk'),
bodyParser = require('body-parser'),
multer = require('multer'),
multerS3 = require('multer-s3');
var router = express.Router();

//model
const User  = require('../models/models').User;
const Activity= require('../models/models').Activity;

//settting up S3
var s3 = new aws.S3();
var upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'newvuew',
    metadata: function (req, file, cb) {
      cb(null, {fieldName: file.fieldname});
    },
    Key: function (req, file, cb) {
      // console.log('key', file);
      cb(null, file.orginalname)
    }
  })
});


router.post('/createActivity', upload.fields([{name: 'file', maxCount: 4},
  { name: 'video', maxCount: 1}]), function(req, res){

    var activity = req.body.activity;
    console.log("this is the body: ", activity)
    Activity.findOne({$and: [{activityTitle: req.body.activityTitle},
      {activityCreator: activity.activityCreator}]}, function(err, activityfind) {
      if (err) {
                return {err, user}
      }

    if(!activityfind){
      console.log("Creating an activity")
      var newActivity = new Activity({
        activityCreator: activity.activityCreator,
        activityTitle: activity.activityTitle,
        activityDescription: activity.activityDescription,
        typeofRoom: activity.typeofRoom,
        activityCategory: activity.activityCategory,
        timeStart: activity.timeStart,
        timeEnd: activity.timeEnd,
        // activityImages: req.files['file'] ? req.files['file'][0].location : '',
        // activityVideo: req.files['video'] ? req.files['video'][0].location : '',
        activityLocation: activity.activityLocation,
        interestUser: [],
        activityCapacity: activity.activityCapacity
      })

      newActivity.save(function(err, activityNew){
        if (err) {
          console.log('error has occur: ',  err)
        } else {
          console.log('Nice, you created a file')
          console.log(activityNew);
          User.findById(activityNew.activityCreator, function(err, user){
            console.log(user)
            user.activities = [...user.activities, ...[activityNew._id]]
            user.save(function(err){
              if (err) {
                console.log('error has occur: ',  err)
              } else {
                console.log('Nice, activity added in the user model')
              }
            })
          })

        }
      })
    }else{
      console.log('activity already exist!')
    }

  })
});

//populate activities by category
router.post('/populateActivities', function(req, res) {
  console.log("INSIDE POPULATE ACTIVITIES")
  console.log("CATEGORY", req.body.category)
  Activity.find({activityCategory: req.body.category}).populate({
    path:'activityCreator',
    options: {
        limit: req.body.length,
        sort: { created: -1},
    }
  }).exec(function (err, articles) {
      if (err) console.log('error is good');
      console.log("articles is ", articles)
      console.log("NEW ACTIVITIES", articles)
      var activities = Object.values(articles)
      res.send(activities)
      return articles;
  });
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


// TODO: Edit an activity
router.post('/editActivity', function(req, res) {
    // req.body.id
    Activity.findOneAndUpdate({_id: req.body.id}, req.body.data, function(err, doc){
    if (err) return res.send(500, { error: err });
    return res.send("succesfully saved");
    });

});

router.post('/getActivityOwner', function(req, res){

  User.findOne({_id: req.body.userID}, function(err, user) {
          if (err) {
              return {err, user}
          }
          if (user) {
              return user
          } else {
            console.log("cannot find activity owner");
            return null
          }
    });

});


module.exports = router;