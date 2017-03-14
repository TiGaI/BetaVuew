
import React, { Component } from 'react';
import { AppRegistry, ScrollView, StyleSheet, Text, View, TextInput, TouchableOpacity, NavigatorIOS, ListView, Alert, AsyncStorage, Image } from 'react-native';
import { Navigator } from 'react-native';
import Swiper from 'react-native-swiper'
import randomcolor from 'randomcolor'

import ActivitiesPage from './activitiesPage'
import SwiperView from './swiperView'

// import { NavigationExperimental } from 'react-native';
// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { actions } from 'react-native-navigation-redux-helpers';
//
// const {
//   popRoute,
//   pushRoute,
// } = actions;
//
// const {
//   CardStack: NavigationCardStack
// } = NavigationExperimental;
//
// class GlobalNavigation extends Component {
//     render() {
//         return (
//       <NavigationCardStack
//         navigationState={this.props.navigation}
//         renderOverlay={this._renderOverlay}
//         renderScene={this._renderScene}
//       />
//         );
//     }
//
//     onGoBack() {
//     const { dispatch, navigation } = this.props;
//     dispatch(popRoute(navigation.key));
//     }
//
//   onGoSomewhere() {
//     const { dispatch, navigation } = this.props;
//     dispatch(pushRoute({ key: 'sowhere else' }, navigation.key));
//   }
// }
//
// function mapDispatchToProps(dispatch) {
//     return {
//         dispatch
//     };
// }
//
// function mapStateToProps(state) {
//     return {
//         // XX: assuming you've registered the reducer above under the name 'cardNavigation'
//         navigation: state.cardNavigation
//     };
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(GlobalNavigation);

// var viewed = [{
//   "id": 1,
//   "price": "$22.17",
//   "name": "dui vel sem sed",
//   "reviews": 52
// }, {
//   "id": 2,
//   "price": "$39.55",
//   "name": "nec sem duis aliquam",
//   "reviews": 78
// }, {
//   "id": 3,
//   "price": "$39.84",
//   "name": "accumsan tellus nisi",
//   "reviews": 89
// }]
//
// var image1 = require("../../assets/images/cyclist.jpg")
// var image2 = require("../../assets/images/runner.jpg")
// var image3 = require("../../assets/images/cyclist.jpg")
// var image4 = require("../../assets/images/cyclist.jpg")
// var image5 = require("../../assets/images/cyclist.jpg")
// var image5 = require("../../assets/images/cyclist.jpg")
//
// var favs = [
// {name:"It Yourts So Good", homes : 18, image: image1},
// {name:"Underground Homes", homes : 4, image: image1},
// {name:"Geodesic Domes", homes : 5, image: image1},
// {name:"Smells Like Eames Spirit", homes : 22, image: image1},
// {name:"Best of Bali", homes : 18, image: image1},
// {name:"Family Fun around the World", homes : 26, image: image1},
// {name:"Castles", homes : 26, image: image1},
// {name:"Around The World in 15 Listings", homes : 15, image: image1},
// {name:"Milano Design", homes : 20, image: image1},
// {name:"Oui, Oui Paris", homes : 25, image: image2},
// ]
//
// var images = [
// image1,
// image2
//
// ]
//
// class TitleText extends React.Component {
//   render() {
//     return (
//       <Text style={{ fontSize: 48, color: 'white' }}>
//         {this.props.label}
//       </Text>
//     )
//   }
// }
//
//
// var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
//
// export default class Index extends Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       dataviewed:ds.cloneWithRows(viewed),
//       datafav:ds.cloneWithRows(favs),
//       clicked: true
//     }
//   }
//
//   favourites(val){
//      return(
//       <TouchableOpacity onPress={this.press.bind(this,val)}>
//       <Image source={val.image} resizeMode="stretch" style={{width:330, height:220, margin:5,marginBottom:30, justifyContent:'center', alignItems:'center'}}>
//       <Text style={{backgroundColor:'rgba(0,0,0,0)', textAlign:'center', color:'#fff', fontSize:25, fontWeight:'700'}}>{val.name}</Text>
//       <Text style={{backgroundColor:'rgba(0,0,0,0)', color:'#fff',fontSize:13, fontWeight:'600'}}>{val.homes} homes</Text>
//       </Image>
//       </TouchableOpacity>
//       )
//   }
//   componentDidMount(){
// }
// viewStyle() {
//     return {
//       flex: 1,
//       backgroundColor: randomcolor(),
//       justifyContent: 'center',
//       alignItems: 'center',
//     }
//   }
// press(val) {
//   console.log(val);
//   this.props.state.dispatch({type: "TEST"})
//   };
// }
// endReached(){
//   console.log('hit end')
//   favs = favs.concat(favs);
//   this.setState({datafav: ds.cloneWithRows(favs)})//this.state.datafav.concat(favs))})
// }

class TitleText extends Component {
  render() {
    return (
      <Text style={{ fontSize: 48, color: 'white' }}>
        {this.props.label}
      </Text>
    )
  }
}


export default class Index extends Component {



  // renderScene(route, navigator) {
  //   var {store,actions} = this.props;
  //   console.log("STORE", store)
  //   console.log("navigator", navigator);
  //   var routeId = store.getState().nav;
  //   console.log(routeId)
  //   if (routeId === "ActivitiesPage") {
  //     console.log("I am here")
  //     // return<Text>Hello</Text>
  //     return (<ActivitiesPage store={this.props.store} Actions={this.props.Actions} navigator = {navigator}/>);
  //   };
  //   if (routeId === "Activity") {
  //     return (<SwiperView store={this.props.store} Actions={this.props.Actions} navigator = {navigator} />);
  //   }
  // }
  //
  // log(log){
  //   console.log('in log')
  //   console.log(log)
  // }

  render(){

    const { store, Actions } = this.props;

      return (
        <View style={{flex:1}}>
          <NavigatorIOS
          style={{flex: 1}}
          initialRoute={{
              component: ActivitiesPage,
              title: 'ActivitiesPage'
            }}
            navigationBarHidden={true}>
          </NavigatorIOS>
        </View>
      )
    }

    // (<View style={{flex: 1}}><Text>SOMETHING SUPEERERERERERER LONG</Text><Navigator
    // style={{flex: 1}}
    // // ref={"NAV"}
    // // initialRoute={{id: "ActivitiesPage", name: "ActivitiesPage", title: "ActivitiesPage", index: 0}}
    // renderScene={this.renderScene.bind(this)}>{this.props.renderScene}></Navigator></View>)
    //   // {(this.props.store.getState().nav === "ActivitiesPage") ? <ActivitiesPage store={this.props.store} Actions={this.props.Actions} /> : null}
    //   // { (this.props.store.getState().nav === "Activity") ? <SwiperView store={this.props.store} Actions={this.props.Actions} /> : null
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ff585b',
    height:400,
  },
  container2: {
    backgroundColor: '#fff',
    borderBottomWidth:1,
    borderBottomColor:'#d3d3d3',
    marginTop: 40

  },
  container3: {
    flex: 1
  },
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

module.exports = Index;
