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
  render(){
    console.log("this is at swiperView.js and this is this.prop: ", this.props)
    const {notifications} = this.props.activityPageState

    if(notifications){
      var notification = notifications.map(function(x){
        return(

        )
      });

    }


    return (
        <View>
        { notifications !== null ? (
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
    activityPageState: state.get('activityPageState')
	};
}

function mapDispatchToProps(dispatch) {
	return {
		dispatch
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
