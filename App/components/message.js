import React, { Component, PropTypes } from 'react';
import {
  AppRegistry, ScrollView, StyleSheet, View, TextInput, TouchableOpacity, NavigatorIOS,
  ListView, Alert, Image } from 'react-native';
import { Container, Content, Left, Body, Right, ListItem, Thumbnail, Text } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper'
import styles from './styles'

import MapView from 'react-native-maps';
import randomcolor from 'randomcolor';

import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/initialAction';
import { connect } from 'react-redux';

let Log = require('./Log');
let MessageEntry = require('./MessageEntry');


class Message extends Component{
  constructor(props){
    super(props);
    //setting loading and
    this.props.actions.getUserNotifications(this.props.profile.userObject._id)
  }
  _onMessageSubmit(text) {
    this.props.chatActions.createMessage(this.props.author, text);
  }
  render(){
    console.log("this is at swiperView.js and this is this.prop: ", this.props)
    const {userObject} = this.props.profile

    if(userObject){
      const profileImg = userObject.profileImg
      console.log('this is looking for the profile image',profileImg)
      var screen = (
          <View style={{flex:1}}>
            <View {...style('authorName')}>
              <Text {...style('authorNameText')}>{this.props.author}</Text>
            </View>
            <Log messages={this.props.message.message} />
            <MessageEntry onSubmit={(message) => this._onMessageSubmit(message)} />
          </View>
        );
    }

    return (
        <View>
        { userObject !== null ? (
          <Container>
              <Content>

              </Content>
          </Container>
          ) : null}
        </View>
    )
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
		dispatch
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Message);
