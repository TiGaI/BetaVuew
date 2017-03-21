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

// TODO: Get specific event
//Get specific event.
router.post('/createActivity', upload.fields([{name: 'file', maxCount: 4},
  { name: 'video', maxCount: 1}]), function(req, res){
    // console.log(req.files['file'][0].location)
    Activity.findOne({$and: [{activityTitle: req.body.activityTitle},
      {activityCreator: req.body.activityCreator._id}]}, function(err, activity) {
      if (err) {
                return {err, user}
            }
    var activity = new Activity({
      activityCreator: req.body.activityCreator._id,
      activityTitle: req.body.activityTitle,
      activityDescription: req.body.activityDescription,
      typeofRoom: req.body.typeofRoom,
      activityCategory: req.body.activityCategory,
      timeStart: req.body.timeStart,
      timeEnd: req.body.timeEnd,
      activityImages: req.files['file'][0].location,
      activityVideo: req.files['video'][0].location,
      activityLocation: req.body.activityLocation,
      interestUser: [],
      activityCapacity: req.body.activityCapacity
    })
    activity.save(function(err){
      if (err) {
        res.send(err)
      } else {
        res.redirect('/')
      }
    })
  })
});


// TODO: get events for each category.
//Get all Events for the index page.
router.get('/indexActivities', function(req, res) {

});


// TODO: Get specific event
//Get specific event.
router.get('/activity', function(req, res) {
    // req.body.id


});

module.exports = router;
