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

class DetailEvent extends Component{
  viewStyle() {
    return {
      flex: 2,
      backgroundColor: 'white',
      justifyContent: 'center'
    }
  }
  joinActivity() {

      // var copy = Object.assign({}, value);
      // copy["activityCreator"] = this.props.profile.id
      // console.log("this is copy: ", copy)
      //  fetch("http://localhost:8080/joinActivity", {
      //    method: 'POST',
      //    headers: {
      //      "Content-Type": "application/json"
      //    },
      //    body: JSON.stringify({
      //      activity: copy
      //    })
      //  })
  }
  addFriend(){
    const {userObject} = this.props.profile;
    const {activityCreator, actions} =this.props;
    actions.sendFriendRequest(userObject._id , activityCreator[0]._id);
    console.log('ADDEDDDDDEDDDD FRIEND');
  }
  render(){
    // console.log("this is at detailEventProfile.js and this is this.prop: ", this.props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const dataFavs = ds.cloneWithRows(favs);
   var userObject = this.props.activityCreator[0]

   var activityObject = this.props

   if(userObject.length > 0){
     const profileImg = userObject.profileImg
    //  console.log('this is looking for the profile image', profileImg)
     var alreadyFriend = false
     var connectionLength = this.props.profile.userObject.connection.filter(
       function(x){
         return x === userObject[0].id
       }).length

     if(userObject[0].id === this.props.userObject.profile.id || connectionLength > 0){
       alreadyFriend = true
     }
   }

    return (
        <View>
        { this.props.profile.userObject ? (  <Swiper
            loop={false}
            showsPagination={false}
            index={1}>

            <View style={{flex: 1, backgroundColor: 'transparent'}}>
              <View style={{flex: 2}}>
                <View style={{flex: 1}}>
                <Image source={require("../../assets/images/cyclist.jpg")}
                  resizeMode = "stretch"
                  style={{flex:1, alignItems:'center', width:null, height:null, justifyContent:'center'}}>
                </Image>
                </View>
              </View>

              <View style={{flex: 1, padding: 20, margin: 0}}>
              <ScrollView style={{flex: 1}}>
                <View style={{flex: 1}}>
                  <Text style={{fontSize: 25, fontWeight: '700', color: '#323232'}}>{activityObject.activityTitle}</Text>
                </View>
                <View style={{flex: 1, marginTop: 10}}>
                <Text numberOfLines={3} style={{fontSize: 15, fontWeight: '300', color: '#4E4E4E' }}>{activityObject.activityDescription}</Text>
                </View>
                <View style={{flex: 1, marginTop: 10}}>
                  <Button full success onPress={this.joinActivity()}>
                      <Text style={{color: 'white', fontSize: 20, fontWeight: '500'}}>Join Activity</Text>
                  </Button>
                </View>
              </ScrollView>
              </View>
            </View>


            <Swiper
              horizontal={false}
              loop={false}
              showsPagination={false}
              index={1}>

              <View style={this.viewStyle()}>
                <Container>
                  <Content>
                    <View style={styles.profileBox}>
                      <Thumbnail style={{marginTop: 10, height: 100, width: 100, borderRadius: 50}} source={{uri: userObject.profileImg }} />
                      <Text style={{textAlign: 'center', fontWeight: '400', fontSize: 25, marginTop: 5}}>{userObject.firstName + " " + userObject.lastName}</Text>
                      <Text style={{textAlign: 'center', fontWeight: '300', fontSize: 10, marginBottom: 5}}>Age: {userObject.age}</Text>
                      <Text note style={{textAlign: 'center', fontWeight: '100', fontSize: 12, marginBottom: 5, color: '#323232'}}>Bio: {userObject.bio}</Text>
                      <View style={{flex: 1, flexDirection: 'row'}}>
                        <TouchableOpacity style={{flex: 1}} onPress={this.addFriend.bind(this)}>
                        <View style={{flex: 1, backgroundColor: '#00A8BE', alignItems: 'center', padding: 15,
                         margin: 20, borderRadius: 35}}>
                         <Text style={{color: 'white', fontWeight: '500', letterSpacing: 1}}>FOLLOW</Text>
                         </View>
                          </TouchableOpacity>
                          <TouchableOpacity style={{flex: 1}} >
                          <View style={{flex: 1, backgroundColor: 'white', alignItems: 'center', padding: 15,
                        borderColor: '#00A8BE', borderStyle: 'solid', borderWidth: 2, margin: 20,  borderRadius: 35, marginLeft: -5}}>
                        <Text style={{color: '#00A8BE',
                        fontWeight: '500', letterSpacing: 1}}>MESSAGE</Text>
                        </View>
                      </TouchableOpacity>
                      </View>
                      <View style={{flex:1, flexDirection: 'row'}}>
                        <View style={{flex: 1, backgroundColor: 'white', alignItems: 'center', padding: 10,
                      borderColor: 'lightgrey', borderStyle: 'solid', borderWidth: 1, borderLeftWidth: 0, borderRightWidth: 0,marginLeft: 10}}>
                          <Text>236</Text>
                          <Text style={{fontSize: 12, color: 'grey'}}>FOLLOWERS</Text>
                        </View>
                        <View style={{flex: 1, backgroundColor: 'white', alignItems: 'center', padding: 10,
                      borderColor: 'lightgrey', borderStyle: 'solid', borderWidth: 1}}>
                          <Text>23.6k</Text>
                          <Text style={{fontSize: 12, color: 'grey'}}>EVENTS</Text>
                        </View>
                        <View style={{flex: 1, backgroundColor: 'white', alignItems: 'center', padding: 10,
                      borderColor: 'lightgrey', borderStyle: 'solid', borderWidth: 1, borderRightWidth: 0, borderLeftWidth: 0, marginRight: 10}}>
                          <Text>2.8k</Text>
                          <Text style={{fontSize: 12, color: 'grey'}}>FOLLOWING</Text>
                        </View>
                      </View>
                    </View>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                      <TouchableOpacity style={{flex: 1}} onPress={this.border}>
                        <View style={{flex: 1, margin: 10, marginTop: 20}}><Text style={{fontSize: 12, color: 'grey', textAlign: 'center'}}>MY EVENTS</Text></View>
                      </TouchableOpacity>
                      <TouchableOpacity style={{flex: 1}} onPress={this.border}>
                        <View style={{flex: 1, margin: 10, marginTop: 20}}><Text style={{fontSize: 12, color: 'grey', textAlign: 'center'}}>VIDEOS</Text></View>
                      </TouchableOpacity>
                      <TouchableOpacity style={{flex: 1}} onPress={this.border}>
                        <View style={{flex: 1, margin: 10, marginTop: 20}}><Text style={{fontSize: 12, color: 'grey', textAlign: 'center'}}>IMAGES</Text></View>
                      </TouchableOpacity>
                    </View>
                    <View style={{flex:1, padding: 20, marginTop:-10}}>
                      <ListView
                      dataSource = {dataFavs}
                      renderRow={(rowData) =>
                        <TouchableOpacity >
                        <Image source={rowData.image} resizeMode="stretch" style={{width:150, height:150, marginRight: 10, justifyContent:'flex-end', alignItems:'center', padding: 15}}>
                        <Text style={{backgroundColor:'rgba(0,0,0,0)', textAlign:'center', color:'white', fontSize:20, fontWeight:'700'}}>{rowData.name}</Text>
                        <Text style={{backgroundColor:'rgba(0,0,0,0)', color:'#fff',fontSize:10, fontWeight:'600'}}>{rowData.activityDescription}</Text>
                        </Image>
                        </TouchableOpacity>
                      }
                      horizontal = {true}
                      showsHorizontalScrollIndicator = {false}
                      onEndReachedThreshold = {500}
                      />

                    </View>
                  </Content>
                </Container>
              </View>



            </Swiper>
            <View style={{flex: 1}}>
              <ScrollView style={{flex:1}}>
                <View style={{flex: 1, padding: 10}}>
                  <View style={{flex:1}}>
                    <Text style={{fontSize: 25, fontWeight: '700', color: '#323232', marginTop: 20}}>Activity Description</Text>
                    <Text numberOfLines={3} style={{fontSize: 15, fontWeight: '300', color: '#4E4E4E' , marginTop: 20, textAlign: 'justify'}}>Take a run to the beautiful twin peaks of San Francisco.
                    The run is 5 miles in distance and will usually take around 1 hour to complete.</Text>
                  </View>
                  <View style={{flex:1, flexDirection: 'row', borderStyle: 'solid', borderColor:'grey', padding: 20,
                   borderBottomWidth: 1, borderTopWidth: 1, marginTop: 20}}>
                    <View style={{flex: 1}}>
                      <Text style={{fontSize: 15, fontWeight: '400', color: '#323232', textAlign: 'center'}}>Start: 5:00 PM EST</Text>
                    </View>
                    <View style={{flex: 1}}>
                      <Text style={{fontSize: 15, fontWeight: '400', color: '#323232',  textAlign: 'center'}}>End: 7:00 PM EST</Text>
                    </View>
                  </View>
                  <View style={{flex:1, borderStyle: 'solid', borderColor:'grey',
                   borderBottomWidth: 1}}>
                    <Text style={{fontSize: 20, fontWeight: '500', color: '#323232', marginTop: 20, textAlign: 'justify'}}>Location</Text>
                    <Text numberOfLines={3} style={{fontSize: 15, fontWeight: '300', color: '#4E4E4E' , marginTop: 20}}>We will meet the top of Twin Peaks.
                     The address is 501 Twin Peaks Blvd, San Francisco, CA 94114</Text>
                    <MapView
                      style={{height: 200, width: 350, marginTop: 20, marginBottom: 20}}
                      initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                      }}
                    />
                  </View>
                  <Text style={{fontSize: 20, fontWeight: '500', color: '#323232', marginTop: 20, textAlign: 'justify'}}>General Information</Text>
                  <View style={{flex:1, flexDirection: 'row', marginTop: 20}}>
                    <View style={{flex:1, backgroundColor: '#00A699', height: 50, justifyContent: 'center', alignItems: 'center',
                    borderColor: 'transparent', borderStyle: 'solid', borderWidth: 1, borderRadius: 3, marginRight: 5}}>
                    <Text style={{fontSize: 15, fontWeight: '500', color: 'white'}}>Group Size</Text>
                    <Text style={{fontSize: 15, fontWeight: '500', color: 'white'}}>5</Text>
                    </View>
                    <View style={{flex:1, backgroundColor: '#00A699', height: 50, justifyContent: 'center', alignItems: 'center',
                  borderColor: 'transparent', borderStyle: 'solid', borderWidth: 1, borderRadius: 3}}>
                    <Text style={{fontSize: 15, fontWeight: '500', color: 'white'}}>Ages</Text>
                    <Text style={{fontSize: 15, fontWeight: '500', color: 'white'}}>20-25</Text>
                    </View>
                  </View>
                  <View style={{flex:1, marginTop: 20}}>
                    <View style={{flex:1, backgroundColor: 'white', height: 100, justifyContent: 'center'}}>
                    <Text style={{fontSize: 20, fontWeight: '500', color: '#323232', marginTop: 20}}>Notes</Text>
                    <Text numberOfLines={3} style={{fontSize: 15, fontWeight: '300', color: '#323232' , marginTop: 20,textAlign: 'justify'}}>We invite only athletes with experience
                     running 3 miles of more averaging an 8 minute mile pace.</Text>
                    </View>
                </View>
                </View>
              </ScrollView>
            </View>
          </Swiper>
) : null}
        </View>
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
        actions: bindActionCreators(actionCreators, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailEvent);
