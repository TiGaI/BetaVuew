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


class Notifications extends Component{
  constructor(props){
    super(props);
    this.props.actions.getUserNotifications(this.props.profile.userObject._id)
  }
  render(){
    console.log("this is at swiperView.js and this is this.prop: ", this.props)
    const {userObject} = this.props.profile

    if(userObject){
      const profileImg = userObject.profileImg
      console.log('this is looking for the profile image',profileImg)

      var Friend = userObject.connection.map(function(x){
        return (
                  <ListItem avatar>
                      <Left>
                          <Thumbnail source={x.profileImg} />
                      </Left>
                      <Body>
                          <Text>{x.firstName + ' ' x.lastName}</Text>
                          <Text note>Doing what you like will always keep you happy . .</Text>
                      </Body>
                      <Right>
                          <Text note>3:43 pm</Text>
                      </Right>
                  </ListItem>
        )
      })
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

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
