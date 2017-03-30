import React, { Component, PropTypes } from 'react';
import {
  AppRegistry, ScrollView, StyleSheet, View, TextInput, TouchableOpacity, NavigatorIOS,
  ListView, Alert, Image } from 'react-native';
import { Container, Content, Left, Body, Right, ListItem, Thumbnail, Text } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';


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
          <ListItem thumbnail>
              <Left>

              </Left>
              <Body>
                  <Text>Sankhadeep</Text>
                  <Text note>Its time to build a difference . .</Text>
              </Body>
              <Right>
                  <Button transparent>
                      <Text>Accept</Text>
                  </Button>
                  <Button transparent>
                      <Text>Decline</Text>
                  </Button>
              </Right>
          </ListItem>
        )
      });

    }
    return (
        <View style={{flex: 1}}>
        { notifications.length > 0 ? (
          <Container>
              <Content>
                  {notification}
              </Content>
          </Container>
        ) : (
          <Container>
              <Content>
                <Text>You do not have any notifications</Text>
              </Content>
          </Container>
        )}
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
