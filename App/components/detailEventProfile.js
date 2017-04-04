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
import { BlurView } from 'react-native-blur';

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
  constructor(props){
    super(props);
    console.log('USERIDDDDDDDD',this.props.activityCreator[0]._id);


  }
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
    const {userObject} = this.props.profile;
    const {activitiesPageState} = this.props;
    const {selectedActivityOwner} = activitiesPageState;
    const {selectedActivity} = activitiesPageState;


    console.log("this is userObject in Profile: ", userObject)
    console.log("THis is activitiesPageState: ", selectedActivityOwner)


    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const dataSource = ds.cloneWithRows([]);
    const dataSource2 = ds.cloneWithRows(favs);

   console.log('AYYYYYYYYYYYYEEEEEE', this.props.activitiesPageState )

   var activityObject = this.props

   if(userObject.length > 0){
     const profileImg = userObject.profileImg
    //  console.log('this is looking for the profile image', profileImg)
     var alreadyFriend = false
     var connectionLength = this.props.profile.userObject.connection.filter(
       function(x){
         return x === userObject[0].id
       }).length

     if(userObject._id === this.props.userObject.profile.id || connectionLength > 0){
       alreadyFriend = true
     }
   }
   if (selectedActivityOwner) {
     console.log("Activities", selectedActivityOwner.activities)
   }

   return (
       <View>
       { activitiesPageState.selectedActivityOwner ? (  <Swiper
           loop={false}
           showsPagination={false}
           index={0}>

           <View style={{flex: 1}}>
           <Swiper
             horizontal={false}
             loop={false}
             showsPagination={false}
             index={0}>
             <View style={{flex: 1, backgroundColor: 'transparent'}}>


              <Image source={{uri: 'https://iso.500px.com/wp-content/uploads/2016/04/STROHL__ST_1204-Edit-1500x1000.jpg'}}
                resizeMode = "stretch"
                style={{flex:1, width:null, height:null, justifyContent:'center', opacity: 0.9, padding: 0}}>

                  <View style={{flex: 1, justifyContent: 'flex-start', padding: 20, marginTop: 30}}>
                    <Text style={{fontSize: 15, fontWeight: '400', color: 'white', textAlign: 'left', letterSpacing:1}}>EVENTS</Text>
                    <Text style={{fontSize: 25, fontWeight: '600', color: '#BEBEBE', textAlign: 'left', marginTop: 10}}>San Francisco, CA</Text>
                  </View>
                  <View style={{flex: 2, justifyContent: 'flex-start', padding: 20}}>
                    <Text style={{fontSize: 50, fontWeight: '700', color: 'white', textAlign: 'left', opacity: 1}}>{activityObject.activityTitle}</Text>
                    <Text style={{fontSize: 20, fontWeight: '400', color: 'white', textAlign: 'left', marginTop: 10}}>{activityObject.activityDescription}</Text>
                  <Text style={{fontSize: 20, fontWeight: '400', color: 'white', textAlign: 'left', marginTop: 10}}>Location: {activityObject.activityLocation}</Text>
                  <Text style={{backgroundColor:'rgba(0,0,0,0)', textAlign:'left', color:'white', marginTop: 50, fontSize:13, fontWeight:'300'}}>People going to this event</Text>
                  <ListView
                  dataSource = {dataSource2}
                  renderRow={(rowData) =>
                    <TouchableOpacity>
                    <Image source={rowData.image} resizeMode="stretch"
                    style={{width:50, height:50, marginRight: 10, marginTop: 10, borderRadius: 25, borderWidth: 2, borderColor: 'white',justifyContent:'flex-end', alignItems:'center', padding: 15}}>
                    </Image>
                    <Text style={{backgroundColor:'rgba(0,0,0,0)', textAlign:'center', color:'white', marginRight: 10, fontSize:10, fontWeight:'500'}}>{rowData.name}</Text>
                    </TouchableOpacity>
                  }
                  horizontal = {true}
                  />
                  </View>
                  <View style={{flex: 0, justifyContent: 'center', alignItems: 'center'}}>
                  <TouchableOpacity >
                   <View style={{flex: 0, backgroundColor: '#00A8BE', alignItems: 'center', padding: 10, borderRadius: 5, justifyContent: 'center'}}>
                    <Text style={{color: 'white', fontWeight: '500', letterSpacing: 1}}>JOIN EVENT</Text>
                   </View>
                   </TouchableOpacity>
                  </View>
                  <View style={{flex: 1, justifyContent: 'flex-end', marginBottom: 10 }}>
                    <Icon name="ios-arrow-down" style={{fontSize: 40, color: 'white', fontWeight: '800', textAlign: 'center'}}/>
                    <Text style={{fontSize: 20, fontWeight: '700', color: 'white', textAlign: 'left', opacity: 1, textAlign: 'center', marginBottom: 15}}>Details</Text>
                  </View>


              </Image>


            </View>

             <View style={{flex: 1}}>
             <ScrollView style={{flex:1}}>

               <View style={{flex: 1, padding: 0}}>
               <View style={{flex:1, borderStyle: 'solid', borderColor:'grey',
                borderBottomWidth: 1, paddingTop: 45}}>
                 <MapView
                  resizeMode = "stretch"
                   style={{flex: 1, height: 250, width: null}}
                   initialRegion={{
                     latitude: 37.78825,
                     longitude: -122.4324,
                     latitudeDelta: 0.0922,
                     longitudeDelta: 0.0421,
                   }}
                 >
                  <MapView.Marker
                    coordinate={{latitude: 37.78825,
                    longitude: -122.4324}}
                    title={activityObject.activityTitle}
                 />
                 </MapView>
                 <View style={{flex: 1, flexDirection: 'row', backgroundColor: 'white', padding: 10}}>
                      <View style={{flex: 1, alignItems: 'center'}}>
                      <Text style={{fontSize: 13, fontWeight: '500', color: '#242424', textAlign: 'justify'}}>Going</Text>
                      <Icon name='md-contacts' style={{fontSize: 40, color: '#00A8BE'}}/>
                      <Text style={{fontSize: 11, fontWeight: '500', color: '#242424', textAlign: 'justify'}}>12</Text>
                      </View>
                      <View style={{flex: 1, alignItems: 'center'}}>
                      <Text style={{fontSize: 13, fontWeight: '500', color: '#242424', textAlign: 'justify'}}>Event</Text>
                      <Icon name='md-calendar' style={{fontSize: 40, color: '#00A8BE'}}/>
                      <Text style={{fontSize: 11, fontWeight: '500', color: '#242424', textAlign: 'justify'}}>{activityObject.typeofRoom}</Text>
                      </View>
                      <View style={{flex: 1, alignItems: 'center'}}>
                      <Text style={{fontSize: 13, fontWeight: '500', color: '#242424', textAlign: 'justify'}}>Duration</Text>
                      <Icon name='ios-timer' style={{fontSize: 40, color: '#00A8BE'}}/>
                      <Text style={{fontSize: 11, fontWeight: '500', color: '#242424', textAlign: 'justify'}}>2 Hours</Text>
                      </View>
                      <View style={{flex: 1, alignItems: 'center'}}>
                      <Text style={{fontSize: 13, fontWeight: '500', color: '#242424', textAlign: 'justify'}}>Capacity</Text>
                      <Icon name='ios-people' style={{fontSize: 40, color: '#00A8BE'}}/>
                      <Text style={{fontSize: 11, fontWeight: '500', color: '#242424', textAlign: 'justify'}}>{activityObject.activityCapacity}</Text>
                      </View>
                  </View>
               </View>
               <View style={{flex:1, backgroundColor: 'white', padding: 10, paddingLeft: 30, borderStyle: 'solid', borderColor:'grey',
                borderBottomWidth: 1}}>
                 <Text style={{fontSize: 20, fontWeight: '600', color: '#00A8BE'}}>Location</Text>
                 <Text numberOfLines={3} style={{fontSize: 14, fontWeight: '400', color: '#242424'}}>{activityObject.activityLocation}</Text>
               </View>
              <View style={{flex:1, backgroundColor: 'white', padding: 10, paddingLeft: 30, borderStyle: 'solid', borderColor:'grey',
               borderBottomWidth: 1}}>
                <Text style={{fontSize: 20, fontWeight: '600', color: '#00A8BE'}}>Activity Description</Text>
                <Text numberOfLines={3} style={{fontSize: 14, fontWeight: '400', color: '#242424' ,textAlign: 'justify'}}>{activityObject.activityDescription}</Text>
              </View>
              <View style={{flex:1, backgroundColor: 'white', padding: 10, paddingLeft: 30, borderStyle: 'solid', borderColor:'grey',
               borderBottomWidth: 1}}>
                <Text style={{fontSize: 20, fontWeight: '600', color: '#00A8BE'}}>Date & Time</Text>
                <Text style={{fontSize: 14, fontWeight: '400', color: '#242424', textAlign: 'left'}}>Begins: {activityObject.timeStart}</Text>
                <Text style={{fontSize: 14, fontWeight: '400', color: '#242424',  textAlign: 'left'}}>Ends: {activityObject.timeEnd}</Text>
              </View>
              <View style={{flex:1, backgroundColor: 'white', padding: 10, paddingLeft: 30, borderStyle: 'solid', borderColor:'grey',
               borderBottomWidth: 1}}>
                <Text style={{fontSize: 20, fontWeight: '600', color: '#00A8BE'}}>Notes</Text>
                <Text style={{fontSize: 14, fontWeight: '400', color: '#242424', textAlign: 'left'}}>Notes about the event, for example,
                health or safety precautions. </Text>
              </View>


              </View>
             </ScrollView>
             </View>
             </Swiper>

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
                     <Thumbnail style={{marginTop: 50, height: 100, width: 100, borderRadius: 50}} source={{uri: selectedActivityOwner.profileImg }} />
                     <Text style={{textAlign: 'center', fontWeight: '400', fontSize: 25, marginTop: 5}}>{selectedActivityOwner.firstName + " " + selectedActivityOwner.lastName}</Text>

                     <View style={{flex: 1, flexDirection: 'row'}}>
                       <TouchableOpacity style={{flex: 1}} onPress={this.addFriend.bind(this)}>
                       <View style={{flex: 1, backgroundColor: '#00A8BE', alignItems: 'center', padding: 10,
                        margin: 10, borderRadius: 5}}>
                        <Text style={{color: 'white', fontWeight: '500', letterSpacing: 1}}>FOLLOW</Text>
                        </View>
                         </TouchableOpacity>
                         <TouchableOpacity style={{flex: 1}} >
                         <View style={{flex: 1, backgroundColor: 'white', alignItems: 'center', padding: 10,
                       borderColor: '#00A8BE', borderStyle: 'solid', borderWidth: 2, margin: 10,  borderRadius: 5, marginLeft: -5}}>
                       <Text style={{color: '#00A8BE',
                       fontWeight: '500', letterSpacing: 1}}>MESSAGE</Text>
                       </View>
                     </TouchableOpacity>
                     </View>
                     <View style={{flex:1, flexDirection: 'row'}}>
                       <View style={{flex: 1, backgroundColor: 'white', alignItems: 'center', padding: 10,
                     borderColor: 'lightgrey', borderStyle: 'solid', borderWidth: 1, borderLeftWidth: 0, borderRightWidth: 0,marginLeft: 10}}>
                         <Text>{selectedActivityOwner.connections.length}</Text>
                         <Text style={{fontSize: 12, color: 'grey'}}>FOLLOWERS</Text>
                       </View>
                       <View style={{flex: 1, backgroundColor: 'white', alignItems: 'center', padding: 10,
                     borderColor: 'lightgrey', borderStyle: 'solid', borderWidth: 1}}>
                         <Text>{selectedActivityOwner.activities.length}</Text>
                         <Text style={{fontSize: 12, color: 'grey'}}>EVENTS</Text>
                       </View>
                       <View style={{flex: 1, backgroundColor: 'white', alignItems: 'center', padding: 10,
                     borderColor: 'lightgrey', borderStyle: 'solid', borderWidth: 1, borderRightWidth: 0, borderLeftWidth: 0, marginRight: 10}}>
                         <Text>{selectedActivityOwner.connections.length}</Text>
                         <Text style={{fontSize: 12, color: 'grey'}}>FOLLOWING</Text>
                       </View>
                     </View>
                   </View>
                   <View style={{flex: 1, flexDirection: 'row'}}>
                     <TouchableOpacity style={{flex: 1}} onPress={this.border}>
                       <View style={{flex: 1, margin: 10, marginTop: 20}}><Text style={{fontSize: 12, color: 'grey', textAlign: 'center'}}>MY EVENTS</Text></View>
                     </TouchableOpacity>
                     <TouchableOpacity style={{flex: 1}} onPress={this.border}>
                       <View style={{flex: 1, margin: 10, marginTop: 20}}><Text style={{fontSize: 12, color: 'grey', textAlign: 'center'}}>IMAGES</Text></View>
                     </TouchableOpacity>
                   </View>
                   <View style={{flex:1, padding: 20, marginTop:-10}}>
                     <ListView
                     dataSource = {ds.cloneWithRows(selectedActivityOwner.activities)}
                     renderRow={(rowData) =>
                       <TouchableOpacity >
                       <Image source={{uri: 'https://iso.500px.com/wp-content/uploads/2016/04/STROHL__ST_1204-Edit-1500x1000.jpg'}} resizeMode="stretch"
                       style={{width:200, height:200, marginRight: 10, justifyContent:'flex-end', alignItems:'flex-start', padding: 15}}>
                       </Image>
                       <Text style={{backgroundColor:'rgba(0,0,0,0)', textAlign:'left', color:'black', fontSize:15, fontWeight:'500'}}>{rowData.activityTitle}</Text>
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
       actions: bindActionCreators(actionCreators, dispatch),
       userActions: bindActionCreators(loginCreators, dispatch)
   };
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailEvent);
