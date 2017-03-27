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
  addFriend() {

     fetch("http://localhost:8080/sendFriendRequest", {
       method: 'POST',
       headers: {
         "Content-Type": "application/json"
       },
       body: JSON.stringify({
         toUserID: this.props.activityCreator._id,
         fromUserID: this.props.profile._id
       })
     })

  }
  render(){
    console.log("this is at detailEventProfile.js and this is this.prop: ", this.props)
    var userObject = this.props.activityCreator[0]

    var activityObject = this.props

    if(userObject.length > 0){
      const profileImg = userObject.profileImg
      console.log('this is looking for the profile image', profileImg)
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
                  <View style={{flex: 1, flexDirection: 'row' }}>
                  <View style={{flex: 1, alignItems: 'flex-start', marginTop: 20, marginLeft: 20}}>
                  <TouchableOpacity>
                  <Icon style={{fontSize: 40, color: '#1D79C1'}} name='ios-chatbubbles' />
                  </TouchableOpacity>
                  </View>
                  <View style={{flex: 1, alignItems: 'flex-end', marginTop: 20, marginRight: 20}}>
                  { alreadyFriend ? (null) : (

                    <TouchableOpacity onPress={this.addFriend()}>
                    <Icon style={{fontSize: 40, color: '#1D79C1'}} name='md-person-add' />
                    </TouchableOpacity>

                  ) }
                  </View>
                  </View>
                    <View style={styles.profileBox}>
                      <Thumbnail style={{marginTop: 0, height: 120, width: 120, borderRadius: 60}} source={{uri: userObject.profileImg }} />
                      <Text style={{textAlign: 'center', fontWeight: '300', fontSize: 25, marginTop: 5}}>{userObject.firstName + " " + userObject.lastName}</Text>
                      <Text style={{textAlign: 'center', fontWeight: '300', fontSize: 10, marginBottom: 5}}>Age: {userObject.age}</Text>
                      <Text note style={{textAlign: 'center', fontWeight: '100', fontSize: 12, marginBottom: 5, color: '#323232'}}>Bio: {userObject.bio}</Text>

                      <View style={styles.socialStatus}>
                        <View style={[styles.innerbox,  {alignItems: "flex-end"}]}>
                          <View style={[styles.circle, {backgroundColor: '#54A78B'}]}>
                            <Text style={styles.textInCicle, {color: '#323232'}}>600</Text>
                          </View>
                          <Text style={{textAlign: 'center', color: "#323232", fontWeight: '300', fontSize: 10, paddingRight: 10, marginTop: 5 }}>Followers</Text>
                        </View>
                        <View style={[styles.innerbox,  {alignItems: "center"}]}>
                          <View style={[styles.circle, {backgroundColor: '#5B6AAB'}]}>
                            <Text style={styles.textInCicle, {color: '#323232'}}>27</Text>
                          </View>
                          <Text style={{textAlign: 'center', color: "#323232", fontWeight: '300', fontSize: 10, marginTop: 5}}>Activities</Text>
                        </View>
                        <View style={[styles.innerbox,  {alignItems: "flex-start"}]}>
                          <View style={[styles.circle, {backgroundColor: '#579BAB'}]}>
                            <Text style={styles.textInCicle, {color: '#323232'}}>8.7 K</Text>
                          </View>
                            <Text style={{textAlign: 'center', color: "#323232", fontWeight: '300', fontSize: 10, paddingLeft: 2, marginTop: 5 }}>Savage level</Text>
                        </View>
                      </View>
                    </View>

                    <View style={{backgroundColor: '#1DC16A', flex: 1, height: 300, marginTop: 80}}>
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

export default connect(mapStateToProps, mapDispatchToProps)(DetailEvent);
