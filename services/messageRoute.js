"use strict";
var express = require('express');
var router = express.Router();

//model
const User  = require('../models/models').User;
const Activity= require('../models/models').Activity;
const ActivityAction= require('../models/models').ActivityAction;
const FriendRequest= require('../models/models').FriendRequest;
const Message= require('../models/models').Message;

// Require login past this point.
router.use('/', function(req, res, next){
  if (!req.user) {
    res.redirect('/');
  } else {
    return next();
  }
});

module.exports = router;
