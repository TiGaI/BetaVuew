import React, { Component, PropTypes } from 'react';
import { AppRegistry, ScrollView, StyleSheet, Text, View,
  TextInput, TouchableOpacity, NavigatorIOS, ListView, Alert, AsyncStorage, Image } from 'react-native';
import { Item, Input, Tab, Tabs } from 'native-base';
import Swiper from 'react-native-swiper'
import randomcolor from 'randomcolor'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/initialAction';



var image5 = {uri: 'http://www.thisiscolossal.com/wp-content/uploads/2016/03/finger-4.jpg'}
var image4 = {uri: 'http://cdn.playbuzz.com/cdn/b19cddd2-1b79-4679-b6d3-1bf8d7235b89/93794aec-3f17-47a4-8801-a2716a9c4598_560_420.jpg'}
var image3 = {uri: 'https://iso.500px.com/wp-content/uploads/2016/04/STROHL__ST_1204-Edit-1500x1000.jpg'}
var image2 = {uri: 'http://31k0b1oxydr2takxt23n5fe18p5.wpengine.netdna-cdn.com/wp-content/uploads/2015/04/musician.png'}
var image1 = {uri: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Two_dancers.jpg'}


var favs = [
  {name:"Paint your pets", homes : 18, image: image1},
  {name:"Artists in your area", homes : 4, image: image2},
  {name:"Exploring the outdoors", homes : 5, image: image3},
  {name:"Music is everthing", homes : 18, image: image4},
  {name:"Story through dance", homes : 4, image: image5},
  {name:"Paint your pets", homes : 18, image: image1},
  {name:"Artists in your area", homes : 4, image: image2},
  {name:"Exploring the outdoors", homes : 5, image: image3},
  {name:"Music is everthing", homes : 18, image: image4},
  {name:"Story through dance", homes : 4, image: image5},
]

var images = [
  image1,
  image2

]

var events = [{name: 'Art' },{name: 'Food' },{name: 'Sports' }]

class ActivitiesPage extends Component {

  constructor(props){
    super(props);
    // console.log('props', props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      datafav:ds.cloneWithRows(favs),
      clicked: true,
      events: events
    }
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
    console.log('hey');
    console.log(this.props);
    this.props.navigator.replace({
      component: Swipe,
      passProps: val

    });
  }
  endReached(){
    console.log('hit end')
    console.log('ACTIVITIES PAGE >>>>>>', this.props.activitiesPageState.populatedActivities.length)
    var length = this.props.activitiesPageState.populatedActivities.length + 10
    this.props.actions.populatedActivities(this.props.activitiesPageState.category, length );
  }
  // componentDidMount(){
    // this.props.actions.populatedActivities("Sports", 10);
  // }
  _onMomentumScrollEnd(evt, state, context){
    var category = events[context.state.index].name
    var length = this.props.activitiesPageState.populatedActivities.length + 10
    console.log("THIS IS THE PROPS >>>", this.props.actions)
    this.props.actions.populatedActivities(category, length)


  }
  render() {
    return(
      <View>
      {true ? (
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
          index={1}>
          <Swiper
            horizontal={false}
            loop={true}
            showsPagination={false}
            index={0}
            onMomentumScrollEnd={this._onMomentumScrollEnd.bind(this)}
            >
            {this.state.events.map((x) =>
            <View style={this.viewStyle()}>
                <View style={{flex: 2, justifyContent: 'center', padding: 0}}>
                  <ListView
                  dataSource = {this.state.datafav}
                  renderRow={(val) =>
                    <TouchableOpacity onPress={this.press.bind(this, val)}>
                    <Image source={val.image} resizeMode="stretch" style={{width:350, height:400, marginRight: 10, justifyContent:'flex-end', alignItems:'flex-start', padding: 15}}>
                    <Text style={{backgroundColor:'rgba(0,0,0,0)', textAlign:'center', color:'#fff', fontSize:25, fontWeight:'700'}}>{val.name}</Text>
                    <Text style={{backgroundColor:'rgba(0,0,0,0)', color:'#fff',fontSize:13, fontWeight:'600'}}>{val.homes} homes</Text>
                    </Image>
                    </TouchableOpacity>
                  }
                  horizontal = {true}
                  showsHorizontalScrollIndicator = {false}
                  onEndReachedThreshold = {500}
                  onEndReached={this.endReached.bind(this)}
                  />
                </View>
                  <View style={{flex: 1, justifyContent: 'flex-start', padding: 30, backgroundColor: '#5F4F7E'}}>
                  <Text style={{fontWeight: '500', fontSize: 25, color: 'white'}}>{x.name}</Text>
                      <Text numberOfLines={5} style={{fontSize: 15, fontWeight: '400', color: 'white' , marginTop: 10, textAlign: 'justify'}}>Go grab a workout with a new friend,
                      pickup a new sport, or just go outside and get some sun. There are people around you that want to be active, go out there and be adventurous.
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

export default connect(mapStateToProps, mapDispatchToProps)(ActivitiesPage);
