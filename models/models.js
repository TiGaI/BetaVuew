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
  description: {
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
  hobbies: [],
  images: [String],
  video: [String],
  connections: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
  rating: {
    type: Number
  }
  admin: {
    type: Boolean,
    default: false
  },
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

userSchema.methods.isConnected = function(idToCheck, callback){
  var connection = this.connections.includes(idTOCheck)
  callback(null, connection)
};

var User = mongoose.model("User", userSchema);
var Message = mongoose.model("Message", messageSchema);
module.exports = {
  User: User,
  Message: Message
};
