var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  //How can we keep track of User Activity?
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  bio: {
    type: String,
    default: ""
  },
  gender: {
    type: String,
    default: ""
  },
  email: {
    type: String,
    required: true
  },
  profileImg: {
    type: String
  },
  interestTags: [],
  profileImages: [String],
  profileVideo: [String],
  connections: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
  rating: {
    type: Number
  },
  admin: {
    type: Boolean,
    default: false
  },
  Activities: {
    [{type: mongoose.Schema.Types.ObjectId, ref: 'Activity'}]
  },
  // attachment: {
  //   type: String
  // } don't know what this means
},
{ timestamps: true }
);

var activitySchema = new mongoose.Schema({
  //How can we keep track of User Activity?
  activityCreator: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
  activityTitle: {
    type: String,
    required: true
  },
  activityVideo: {
    type: String
  },
  activityImages: [String],
  activityDescription: {
    type: String,
    default: "",
    required: true
  },
  activityLocation: {
    type: String,
    required: true
  },
  timeStart: {

  },
  timeEnd: {
    type: String,
    required: true
  },
  interestUser: {
    type: String,
    required: true
  },
  typeofRoom: {
    type: String,
    required: true
  },
  activityCapacity: {
    type: Number,
    require: true
  }
},
{ timestamps: true }
);

var messageSchema = new mongoose.Schema({
  body: {
    type: String,
    required: true
  },
  toUser: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  fromUser: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  dateCreated :{
    type: Date,
    required: true
  }
});

var FriendRequestSchema = new mongoose.Schema({
  toUser: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  fromUser: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  accepted :{
    type: Boolean,
    required: true
  },
  { timestamps: true }
);

var activityActionSchema = new mongoose.Schema({
  toUser: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  activity: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Activity'
  },
  accepted :{
    type: Boolean,
    required: true
  },
  { timestamps: true }
);

var User = mongoose.model("User", userSchema);
var Activity = mongoose.model("Message", activitySchema);
var Message = mongoose.model("Message", messageSchema);
var FriendRequest = mongoose.model("FriendRequest", friendRequestSchema);
var ActivityAction = mongoose.model("ActivityAction", activityActionSchema);

module.exports = {
  User: User,
  Activity: Activity,
  Message: Message

};
