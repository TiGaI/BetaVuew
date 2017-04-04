import React, { Component, PropTypes } from 'react';
import {
 StyleSheet, View, TextInput, TouchableOpacity, NavigatorIOS,
  ListView, Alert, Image } from 'react-native';
import { Container, Content, Left, Body, Right, ListItem, Thumbnail, Text, Spinner } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper'

import { bindActionCreators } from 'redux';
import * as messagerAction from '../actions/messagerAction';
import * as loginAction from '../actions/loginAction';
import Message from './chat/message'

import { connect } from 'react-redux';

class FriendsList extends Component{
  constructor(props){
    super(props);
    this.props.messagerActions.getRecentlyAddedFriend(this.props.profile.userObject._id)

  }
  GetMessage(toUserObject){
    this.props.messagerActions.getMessage(this.props.profile.userObject._id, toUserObject)
    // setTimeout(() => {

    // }, 2000)
  }
  // press(rowData) {
  //   this.props.loginActions.getMyActivitiesInfor(rowData.activityCreator[0]._id, rowData);
  //   this.props.navigator.push({
  //     component: DetailEvent,
  //     passProps: rowData,
  //     backButtonTitle: 'Main'
  //   });
  // }
  componentDidUpdate(){
    if(this.props.message.message.length > 0){
      this.props.navigator.push({
          component: Message,
          backButtonTitle: 'Chat'
        });
    }

    setTimeout(() => {
    this.props.navigator.push({
        component: Message,
        backButtonTitle: 'Chat'
      });
    }, 3000)
  }
  render(){
    // const dataSource2 = ds.cloneWithRows(favs);
    const userconnection = this.props.message.userconnection;
      console.log('FRIENDSLIST THIS PROPS', this.props)



    if(userconnection.length > 0){
      var ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2});
      var dataSource = ds.cloneWithRows(userconnection);
    }
    return (
      <View style={{flex: 1}}>
      { userconnection.length > 0 ? (
        <View style={{flex: 1, backgroundColor: '#00A8BE'}}>
          {// <Container>
          //     <Content>
          //     <View style={{flex: 1, borderWidth: 1, borderLeftWidth: 0, borderRightWidth: 0, borderBottomWidth: 0, borderColor: 'white', padding: 10 }}>
          //         <Text style={{backgroundColor:'rgba(0,0,0,0)', textAlign:'left', color:'white', marginRight: 10, fontSize:12, fontWeight:'500'}}>RECENTLY ADDED FRIENDS</Text>
          //         <ListView
          //         dataSource = {dataSource}
          //         renderRow={(rowData) =>
          //           <TouchableOpacity onPress={this.GetMessage.bind(this, rowData)}>
          //           <Image source={{uri: rowData.profileImg}} resizeMode="stretch"
          //           style={{width:80, height:80, marginRight: 10, marginTop: 30, borderRadius: 40, borderWidth: 3, borderColor: 'white',justifyContent:'flex-end', alignItems:'center', padding: 15}}>
          //           </Image>
          //           <Text style={{backgroundColor:'rgba(0,0,0,0)', textAlign:'center', color:'white', marginRight: 10, fontSize:10, fontWeight:'500'}}>{rowData.firstName}</Text>
          //           </TouchableOpacity>
          //         }
          //         horizontal = {true}
          //         showsHorizontalScrollIndicator = {false}
          //         onEndReachedThreshold = {500}
          //         />
          //     </View>
          //     </Content>
          // </Container>
        }
          <View style={{flex: 3, borderWidth: 1, borderLeftWidth: 0, borderRightWidth: 0, borderBottomWidth: 2, borderColor: 'white'}}>
                <Text style={{backgroundColor:'white', textAlign:'left', color:'black',fontSize:12, fontWeight:'500', padding: 10}}>NEW MESSAGES</Text>
                <ListView
                dataSource = {dataSource}
                renderRow={(rowData) =>
                  <TouchableOpacity onPress={this.GetMessage.bind(this, rowData)}>
                  <View style={{flex:1, flexDirection: 'row', borderWidth: 1, borderLeftWidth: 0, borderRightWidth: 0, borderBottomWidth: 1, borderColor: 'white', padding: 10}}>
                    <View style={{flex: 1}}>
                      <Image source={{uri: rowData.profileImg}} resizeMode="stretch"
                      style={{width:70, height:70, marginRight: 10, borderRadius: 35, justifyContent:'flex-end', alignItems:'center', padding: 15}}>
                      </Image>
                    </View>
                    <View style={{flex: 3, justifyContent: 'center'}}>
                        <Text style={{backgroundColor:'transparent', textAlign:'left', color:'white', marginRight: 10, marginBottom: 5, fontSize:15, fontWeight:'700'}}>{rowData.firstName}</Text>
                        <Text style={{backgroundColor:'transparent', textAlign:'left', color:'white', marginRight: 10, marginBottom: 5,fontSize:12, fontWeight:'300'}}>Description about this person</Text>
                        <Text style={{backgroundColor:'transparent', textAlign:'left', color:'white', marginRight: 10, marginBottom: 5,fontSize:13, fontWeight:'700'}}>This is the last message recevied</Text>
                    </View>
                    </View>
                  </TouchableOpacity>


                }
                horizontal = {false}
                showsHorizontalScrollIndicator = {false}
                onEndReachedThreshold = {500}
                />
          </View>
        </View>

      ) : (
              <View style={{flex: 1, justifyContent: 'center'}}>
                <Spinner color='green'/>
              </View>
      )}
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
        messagerActions: bindActionCreators(messagerAction, dispatch),
        loginActions: bindActionCreators(loginAction, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(FriendsList);
