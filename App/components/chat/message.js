import React, { Component, PropTypes } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Spinner } from 'native-base';
import {GiftedChat, Actions, Bubble} from 'react-native-gifted-chat';
import CustomActions from './CustomActions';
import CustomView from './CustomView';

import { bindActionCreators } from 'redux';
import * as messagerAction from '../../actions/messagerAction';
import { connect } from 'react-redux';
import SocketIOClient from 'socket.io-client';


class Message extends Component{
  constructor(props) {
  super(props);
  this.state = {
    messages: [],
    loadEarlier: true,
    typingText: null,
    isLoadingEarlier: false,
  };
  this.socket = SocketIOClient('http://localhost:8080', {
      transports: ['websocket']
    });
  this.socket.on('message', this.onReceivedMessage);
  this.determineUser();

  this._isMounted = false;
  this.onSend = this.onSend.bind(this);
  this.onReceive = this.onReceive.bind(this);
  this.renderCustomActions = this.renderCustomActions.bind(this);
  this.renderBubble = this.renderBubble.bind(this);
  this.renderFooter = this.renderFooter.bind(this);
  this.onLoadEarlier = this.onLoadEarlier.bind(this);
  this._isAlright = null;
}
determineUser(){
  if (this.props.profile.userObject._id) {
      this.socket.emit('userJoined', this.props.profile.userObject._id);
  } else {
      this.socket.emit('userJoined', null);
  }
}
componentWillMount() {
  this._isMounted = true;

this.props.messagerActions.

var messagesForThisChat = this.props.message.message.map((x) => {
if(x.fromUser == this.props.profile.userObject._id){
  return {_id: x._id, text: x.body,
        createdAt: x.dateCreated,
        user: {_id: 2,
        name: this.props.message.chatingUser.firstName + ' ' + this.props.message.chatingUser.lastName,
        avatar: this.props.message.chatingUser.profileImg }}
}else{
  return {_id: x._id, text: x.body, createdAt: x.dateCreated,
            user: {_id: 1,
            name: this.props.profile.userObject.firstName + ' ' + this.props.profile.userObject.lastName,
            avatar: this.props.profile.userObject.profileImg },
            sent: true,
            received: true}
}

});

  this.setState(() => {
    return {
      messages: messagesForThisChat,
    };
  });

  this._isMounted = false;
}

componentDidMount(){

var self = this;
this.socket.on(this.props.profile.userObject._id.toString(), function(messageObject){
    if(messageObject.fromUserID == self.props.message.chatingUser._id){
        self.onReceive(messageObject);
    }
  })
}

onReceive(messageObject) {
  this.setState((previousState) => {
    return {
      messages: GiftedChat.append(previousState.messages, {
        _id: messageObject.body[0]._id,
        text: messageObject.body[0].text,
        createdAt: new Date(),
        user: {
          _id: 2,
          name: this.props.message.chatingUser.firstName + ' ' + this.props.message.chatingUser.lastName,
          avatar: this.props.message.chatingUser.profileImg
        },
      }),
    };
  });
}

onLoadEarlier() {
  this.setState((previousState) => {
    return {
      isLoadingEarlier: true,
    };
  });

  setTimeout(() => {
    if (this._isMounted === true) {
      this.setState((previousState) => {
        return {
          messages: GiftedChat.prepend(previousState.messages, require('./data/old_messages.js')),
          loadEarlier: false,
          isLoadingEarlier: false,
        };
      });
    }
  }, 1000); // simulating network
}

onSend(messages = []) {
  //save in the database
  this.props.messagerActions.sendMessage(this.props.profile.userObject._id, this.props.message.chatingUser._id, messages)
  //appending message on the client side
  this.setState((previousState) => {
    return {
      messages: GiftedChat.append(previousState.messages,  messages)
    };
  });
  var message = {toUserID:  this.props.message.chatingUser._id,
                  fromUserID: this.props.profile.userObject._id,
                  body: messages}
  //emitting messages
  this.socket.emit('sendMessage', message)
}
renderCustomActions(props) {
  if (Platform.OS === 'ios') {
    return (
      <CustomActions
        {...props}
      />
    );
  }
  const options = {
    'Action 1': (props) => {
      alert('option 1');
    },
    'Action 2': (props) => {
      alert('option 2');
    },
    'Cancel': () => {},
  };
  return (
    <Actions
      {...props}
      options={options}
    />
  );
}

renderBubble(props) {
  return (
    <Bubble
      {...props}
      wrapperStyle={{
        left: {
          backgroundColor: '#1bc1e2',
        },
        right: {
          backgroundColor: '#ffb200',
        }
      }}
    />
  );
}

renderCustomView(props) {
  return (
    <CustomView
      {...props}
    />
  );
}

renderFooter(props) {
  if (this.state.typingText) {
    return (
      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>
          {this.state.typingText}
        </Text>
      </View>
    );
  }
  return null;
}
render() {

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
    { this.state.messages && this.props.message.chatingUser ? (

                <GiftedChat
                   messages={this.state.messages}
                   onSend={this.onSend}
                   loadEarlier={this.state.loadEarlier}
                   onLoadEarlier={this.onLoadEarlier}
                   isLoadingEarlier={this.state.isLoadingEarlier}
                   user={{
                     _id: 1,
                     avatar: this.props.profile.userObject.profileImg
                   }}

                   renderActions={this.renderCustomActions}
                   renderBubble={this.renderBubble}
                   renderCustomView={this.renderCustomView}
                   renderFooter={this.renderFooter}
                 />

    ) : (
        <Spinner color='green'/>
    )}
      </View>

  );
}
}

function mapStateToProps(state) {
	return {
		navigation: state.get('tabs'),
    profile: state.get('profile'),
    message: state.get('message')
	};
}

function mapDispatchToProps(dispatch) {
    return {
        messagerActions: bindActionCreators(messagerAction, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Message);

const styles = StyleSheet.create({
  footerContainer: {
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  footerText: {
    fontSize: 14,
    color: '#aaa',
  },
});
