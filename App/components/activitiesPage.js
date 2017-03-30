import React, { Component, PropTypes } from 'react';
import { AppRegistry, ScrollView, StyleSheet, Text, View,
  TextInput, TouchableOpacity, NavigatorIOS, ListView, Alert, AsyncStorage, Image } from 'react-native';
import { Item, Input, Tab, Tabs } from 'native-base';
import Swiper from 'react-native-swiper'
import randomcolor from 'randomcolor'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/initialAction';
import * as loginAction from '../actions/loginAction';

import DetailEvent from './detailEventProfile'

var image5 = {uri: 'https://www.thisiscolossal.com/wp-content/uploads/2016/03/finger-4.jpg'}
var image4 = {uri: 'https://cdn.playbuzz.com/cdn/b19cddd2-1b79-4679-b6d3-1bf8d7235b89/93794aec-3f17-47a4-8801-a2716a9c4598_560_420.jpg'}
var image3 = {uri: 'https://iso.500px.com/wp-content/uploads/2016/04/STROHL__ST_1204-Edit-1500x1000.jpg'}
var image2 = {uri: 'https://static.pexels.com/photos/2855/landscape-mountains-nature-lake.jpg'}
var image1 = {uri: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Two_dancers.jpg'}

var events = [{name: 'Sport' },{name: 'Art' },{name: 'Music' }]

class ActivitiesPage extends Component {

  constructor(props){
    super(props);
    //setting loading and
    this.props.actions.populatedActivities("Sport", 10 );
    // this.props.actions.getNotifications(this.props.profile.userObject.id)
  }
  viewStyle() {
    return ({
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
    });
  }
  press(val) {
    console.log("val", val)
    this.props.loginActions.getMyActivitiesInfor(val.activityCreator[0]._id, val);
    this.props.navigator.push({
      component: DetailEvent,
      passProps: val,
      backButtonTitle: 'Main',
      barTintColor: '#00A8BE'
    });
  }
  endReached(){

    var length = this.props.activitiesPageState.populatedActivities.length + 10
    this.props.actions.populatedActivities(this.props.activitiesPageState.category, length );
  }
  _onMomentumScrollEnd(evt, state, context){
    var category = events[context.state.index].name
    var length = this.props.activitiesPageState.populatedActivities.length + 10

    this.props.actions.populatedActivities(category, length)

  }
  render() {
    console.log('ACTIVITIES PAGE THIS PROPS',this.props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const dataSource = ds.cloneWithRows(this.props.activitiesPageState.populatedActivities )


    return(
      <View>
      {this.props.activitiesPageState.populatedActivities.length > 0 ? (
        <View style={{flex:1}}>
          <View style={{flex:1}}>
          <ScrollView style={{flex:1}}>
          <View style={styles.container2}>

          </View>
          </ScrollView>
          </View>
          <Swiper
          loop={false}
          showsPagination={false}
          index={0}>
          <Swiper
            horizontal={false}
            loop={false}
            showsPagination={false}
            index={0}
            onMomentumScrollEnd={this._onMomentumScrollEnd.bind(this)}
            >
            {[{name: 'Sport' },{name: 'Art' },{name: 'Music' }].map((x) =>
            <View style={{flex: 1}}>
                <View style={{flex: 2, justifyContent: 'center', padding: 0}}>
                  <ListView
                  dataSource = {dataSource}
                  renderRow={(val) =>
                    <TouchableOpacity onPress={this.press.bind(this, val)}>
                    <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Two_dancers.jpg'}} resizeMode="stretch" style={{width:350, height:400, marginRight: 10, justifyContent:'flex-end', alignItems:'flex-start', padding: 15}}>
                    <Text style={{backgroundColor:'rgba(0,0,0,0)', textAlign:'center', color:'#fff', fontSize:25, fontWeight:'700'}}>{val.activityTitle}</Text>
                    <Text style={{backgroundColor:'rgba(0,0,0,0)', color:'#fff',fontSize:13, fontWeight:'600'}}>{val.homes} homes</Text>
                    <Text style={{backgroundColor:'rgba(0,0,0,0)', color:'#fff',fontSize:13, fontWeight:'600'}}>{val.activityDescription}</Text>
                    </Image>
                    </TouchableOpacity>
                  }
                  horizontal = {true}
                  showsHorizontalScrollIndicator = {false}
                  onEndReachedThreshold = {500}
                  onEndReached={this.endReached.bind(this)}
                  />
                </View>
                  <View style={{flex: 1, justifyContent: 'flex-start', padding: 30, backgroundColor: '#22DF8D'}}>
                  <Text style={{fontWeight: '500', fontSize: 25, color: 'white'}}>{x.name}</Text>
                      <Text numberOfLines={5} style={{fontSize: 15, fontWeight: '400', color: 'white' , marginTop: 10, textAlign: 'justify'}}>Description
                      </Text>
                      </View>
                </View>
              )}
          </Swiper>
        </Swiper>
        </View>
      ) : null}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


function mapStateToProps(state) {
  console.log("this is state inside of activitiesPage: ", state)
    return {
        login: state.get('login'),
        profile: state.get('profile'),
        activitiesPageState: state.get('activityPageState')

    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actionCreators, dispatch),
        loginActions: bindActionCreators(loginAction, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivitiesPage);
