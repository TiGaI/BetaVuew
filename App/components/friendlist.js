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
import * as messagerAction from '../actions/messagerAction';
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

    this.props.messagerActions.getRecentlyAddedFriend(this.props.profile.userObject._id)
  }
  render(){


    console.log('CONNECT',this.props);
    const {userconnection} = this.props.message;
    // const ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2});
    // const dataSource = ds.cloneWithRows();
    // const dataSource2 = ds.cloneWithRows(favs);
    console.log('CONNECT',this.props);
    return (

      <View style={{flex: 1}}>
      { userconnection ? (
        <View style={{flex: 1, backgroundColor: '#00A652'}}>
          <Container>
              <Content>
              <View style={{flex: 1, borderWidth: 1, borderLeftWidth: 0, borderRightWidth: 0, borderBottomWidth: 0, borderColor: 'white', padding: 10 }}>
                  <Text style={{backgroundColor:'rgba(0,0,0,0)', textAlign:'left', color:'white', marginRight: 10, fontSize:12, fontWeight:'500'}}>RECENTLY ADDED FRIENDS</Text>
                  <ListView
                  dataSource = {dataSource}
                  renderRow={(rowData) =>
                    <TouchableOpacity>
                    <Image source={{uri: rowData.profileImg}} resizeMode="stretch"
                    style={{width:80, height:80, marginRight: 10, marginTop: 10, borderRadius: 40, borderWidth: 3, borderColor: 'white',justifyContent:'flex-end', alignItems:'center', padding: 15}}>
                    </Image>
                    <Text style={{backgroundColor:'rgba(0,0,0,0)', textAlign:'center', color:'white', marginRight: 10, fontSize:10, fontWeight:'500'}}>{rowData.firstName}</Text>
                    </TouchableOpacity>
                  }
                  horizontal = {true}
                  showsHorizontalScrollIndicator = {false}
                  onEndReachedThreshold = {500}
                  />
              </View>
              <View style={{flex: 1}}>
                    <Text style={{backgroundColor:'rgba(0,0,0,0)', textAlign:'left', color:'white', margin: 10, fontSize:12, fontWeight:'500'}}>NEW MESSAGES</Text>
                    <ListView
                    dataSource = {dataSource2}
                    renderRow={(rowData) =>
                      <TouchableOpacity>
                      <View style={{flex:1, flexDirection: 'row', borderWidth: 2, borderLeftWidth: 0, borderRightWidth: 0, borderBottomWidth: 0, borderColor: 'white', padding: 10}}>
                        <View style={{flex: 1}}>
                          <Image source={rowData.image} resizeMode="stretch"
                          style={{width:80, height:80, marginRight: 10, borderRadius: 40, justifyContent:'flex-end', alignItems:'center', padding: 15}}>
                          </Image>
                        </View>
                        <View style={{flex: 3, justifyContent: 'center'}}>
                            <Text style={{backgroundColor:'transparent', textAlign:'left', color:'white', marginRight: 10, marginBottom: 5, fontSize:15, fontWeight:'700'}}>{rowData.name}</Text>
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

              </Content>
          </Container>
        </View>
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
        actions: bindActionCreators(actionCreators, dispatch),
        messagerActions: bindActionCreators(messagerAction, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(FriendsList);
