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

// Require login past this point.
router.use('/', function(req, res, next){
  if (!req.user) {
    res.redirect('/');
  } else {
    return next();
  }
});

router.post('/createActivity', upload.fields([{name: 'file', maxCount: 4},
  { name: 'video', maxCount: 1}]), function(req, res){
    // console.log(req.files['file'][0].location)
    Activity.findOne({$and: [{activityTitle: req.body.activityTitle},
      {activityCreator: req.body.activityCreator._id}]}, function(err, activity) {
      if (err) {
                return {err, user}
      }

    if(!activity){
      var newActivity = new Activity({
        activityCreator: req.body.activityCreator._id,
        activityTitle: req.body.activityTitle,
        activityDescription: req.body.activityDescription,
        typeofRoom: req.body.typeofRoom,
        activityCategory: req.body.activityCategory,
        timeStart: req.body.timeStart,
        timeEnd: req.body.timeEnd,
        activityImages: req.files['file'] ? req.files['file'][0].location : '',
        activityVideo: req.files['video'] ? req.files['video'][0].location : '',
        activityLocation: req.body.activityLocation,
        interestUser: [],
        activityCapacity: req.body.activityCapacity
      })

      newActivity.save(function(err){
        if (err) {
          res.send(err)
        } else {
          console.log('Nice, you created a file')
        }
      })
    }else{
      console.log('activity already exist!')
    }

  })
});

//populate activities by category
router.get('/populateActivities', function(req, res) {
  Activity.find({activityCategory: req.body.category}).populate({
    path:'Articles',
    options: {
        limit: req.body.length,
        sort: { created: -1},
    }
  }).exec(function (err, articles) {
      if (err) console.log('error is good');
      console.log("articles is ", articles)
      return articles;
  });
});


// TODO: Edit an activity
router.post('/editActivity', function(req, res) {
    // req.body.id

});

// TODO: Get owner profile of the acitivity
router.get('/getActivityOwner', function(req, res) {
    // req.body.id

});


module.exports = router;
