import React, { Component, PropTypes } from 'react';
import {
  AppRegistry, ScrollView, StyleSheet, View, TextInput, TouchableOpacity, NavigatorIOS,
  ListView, Alert, Image } from 'react-native';
import { Container, Content, Left, Body, Right, Text, ListItem, Thumbnail, Card, CardItem, Button, Tabs, Tab } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper'
import styles from './styles'


import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/initialAction';
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

var x  = 1;
var y = 2;
var z = 3;

function renderIf(condition, content) {
    if (condition) {
        return content;
    } else {
        return null;
    }
}

class Test1 extends Component{

  render(){

    return (

                    <ListItem avatar>
                        <Left>
                            <Thumbnail source={image1} />
                        </Left>
                        <Body>
                            <Text>Name</Text>
                            <Text style={{fontSize: 14, color: 'grey'}}>Name started following you</Text>
                        </Body>
                        <Right>
                            <Text note>3:43 pm</Text>
                        </Right>
                    </ListItem>
    )
  }
}

class Test2 extends Component{

  render(){

    return (

                    <ListItem avatar>
                        <Left>
                            <Thumbnail source={image1} />
                        </Left>
                        <Body>
                            <Text>Name2</Text>
                            <Text style={{fontSize: 14, color: 'grey'}}>Name2 wants to join your event</Text>
                        </Body>
                        <Right>
                            <Text note>3:43 pm</Text>
                        </Right>
                    </ListItem>
    )
  }
}

class NotificationsPage extends Component{

  render(){

    return (
      <View style={{flex:1}}>
          {renderIf(x=1,
              <Test1 />
          )}

          {renderIf(y=2,
              <Test2 />
          )}
      </View>
    )
  }
}

function mapStateToProps(state) {
	return {
		navigation: state.get('tabs'),
    profile: state.get('profile'),
		indexPage: state.get('indexPage')
	};
}

function mapDispatchToProps(dispatch) {
	return {
		dispatch
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(NotificationsPage);
