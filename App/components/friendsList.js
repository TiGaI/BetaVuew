import React, { Component, PropTypes } from 'react';
import {
  AppRegistry, ScrollView, StyleSheet, View, TextInput, TouchableOpacity, NavigatorIOS,
  ListView, Alert, Image } from 'react-native';
import { Container, Content, Left, Body, Right, Text, ListItem, Thumbnail, Card, CardItem, Button } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper'
import styles from './styles'

import MapView from 'react-native-maps';
import randomcolor from 'randomcolor';

import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/initialAction';
import * as loginCreators from '../actions/loginAction';
import { connect } from 'react-redux';

var image5 = {uri: 'https://www.thisiscolossal.com/wp-content/uploads/2016/03/finger-4.jpg'}
var image4 = {uri: 'https://cdn.playbuzz.com/cdn/b19cddd2-1b79-4679-b6d3-1bf8d7235b89/93794aec-3f17-47a4-8801-a2716a9c4598_560_420.jpg'}
var image3 = {uri: 'https://iso.500px.com/wp-content/uploads/2016/04/STROHL__ST_1204-Edit-1500x1000.jpg'}
var image2 = {uri: 'https://static.pexels.com/photos/2855/landscape-mountains-nature-lake.jpg'}
var image1 = {uri: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Two_dancers.jpg'}

var favs = [
{name:"DANCE", homes : 18, image: image1},
{name:"OUTDOORS", homes : 4, image: image2},
{name:"TRAVEL", homes : 5, image: image3},
{name:"ART", homes : 22, image: image4},
{name:"ART", homes : 18, image: image5}
]

class FriendsList extends Component{
  constructor(props){
    super(props);
    console.log('USERIDDDDDDDD',this.props.activityCreator[0]._id);


  }

  render(){

   return (
       <View><Text>FRIENDSLIST</Text></View>
   )
 }
}

function mapStateToProps(state) {

   return {
       login: state.get('login'),
       profile: state.get('profile'),
       activitiesPageState: state.get('activityPageState')

   };
}

function mapDispatchToProps(dispatch) {
   return {
       actions: bindActionCreators(actionCreators, dispatch),
       userActions: bindActionCreators(loginCreators, dispatch)
   };
}

export default connect(mapStateToProps, mapDispatchToProps)(FriendsList);
