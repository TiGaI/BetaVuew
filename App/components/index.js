
import React, { Component, PropTypes } from 'react';
import { AppRegistry, ScrollView, StyleSheet, Text, View, TextInput, NavigatorIOS, TouchableOpacity, ListView, Alert, AsyncStorage, Image } from 'react-native';
import { Container, Content, Left, Body, Right, ListItem, Thumbnail } from 'native-base';
import Swiper from 'react-native-swiper'
import randomcolor from 'randomcolor'



var viewed = [{
  "id": 1,
  "price": "$22.17",
  "name": "dui vel sem sed",
  "reviews": 52
}, {
  "id": 2,
  "price": "$39.55",
  "name": "nec sem duis aliquam",
  "reviews": 78
}, {
  "id": 3,
  "price": "$39.84",
  "name": "accumsan tellus nisi",
  "reviews": 89
}]

var image1 = require("../../assets/images/cyclist.jpg")
var image2 = require("../../assets/images/runner.jpg")
var image3 = require("../../assets/images/cyclist.jpg")
var image4 = require("../../assets/images/cyclist.jpg")
var image5 = require("../../assets/images/cyclist.jpg")
var image5 = require("../../assets/images/cyclist.jpg")

var favs = [
{name:"It Yourts So Good", homes : 18, image: image1},
{name:"Underground Homes", homes : 4, image: image1},
{name:"Geodesic Domes", homes : 5, image: image1},
{name:"Smells Like Eames Spirit", homes : 22, image: image1},
{name:"Best of Bali", homes : 18, image: image1},
{name:"Family Fun around the World", homes : 26, image: image1},
{name:"Castles", homes : 26, image: image1},
{name:"Around The World in 15 Listings", homes : 15, image: image1},
{name:"Milano Design", homes : 20, image: image1},
{name:"Oui, Oui Paris", homes : 25, image: image2},
]

var images = [
  image1,
  image2
]

export default class BetaVuew extends Component {
  render() {
    console.log('HEREEEEE!');
    return (
      <NavigatorIOS
        initialRoute={{
          component: Index,
          title: 'Index'
        }}
        style={{flex: 1}}
        navigationBarHidden={true}
      />
    )
  }
}

class TitleText extends Component {
  render() {
    return (
      <Text style={{ fontSize: 48, color: 'white' }}>
        {this.props.label}
      </Text>
    )
  }
}


var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class Index extends Component {
  constructor(props){
    super(props);
    console.log('props', props);
    this.state = {
      dataviewed:ds.cloneWithRows(viewed),
      datafav:ds.cloneWithRows(favs),
      clicked: true
    }
  }
viewStyle() {
    return ({
      flex: 1,
      backgroundColor: randomcolor(),
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
  favs = favs.concat(favs);
  this.setState({datafav: ds.cloneWithRows(favs)})//this.state.datafav.concat(favs))})
}
render() {
    return(
      <View style={{flex:1, padding: 10}}>
        <View style={{flex:1}}>
        <ScrollView style={{flex:1}}>
        <View style={styles.container2}>
        <Text style={{fontWeight: '200', fontSize: 20}}>Sports</Text>
        <ListView
        dataSource = {this.state.datafav}
        renderRow={(val) =>
          <TouchableOpacity onPress={this.press.bind(this, val)}>
          <Image source={val.image} resizeMode="stretch" style={{width:330, height:220, margin:5,marginBottom:30, justifyContent:'center', alignItems:'center'}}>
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
        <Text style={{fontWeight: '200', fontSize: 20}}>Art</Text>
        <ListView
        dataSource = {this.state.datafav}
        renderRow={(val) =>
          <TouchableOpacity onPress={this.press.bind(this, val)}>
          <Image source={val.image} resizeMode="stretch" style={{width:330, height:220, margin:5,marginBottom:30, justifyContent:'center', alignItems:'center'}}>
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
        <Text style={{fontWeight: '200', fontSize: 20}}>Food</Text>
        <ListView
        dataSource = {this.state.datafav}
        renderRow={(val) =>
          <TouchableOpacity onPress={this.press.bind(this, val)}>
          <Image source={val.image} resizeMode="stretch" style={{width:330, height:220, margin:5,marginBottom:30, justifyContent:'center', alignItems:'center'}}>
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
        </ScrollView>
        </View>
      </View>
    )
  }
}


class Swipe extends Component{
  constructor(props){
    super(props)

  }
  viewStyle() {
    return {
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'flex-start',
      padding: 15
    }
  }
  render(){
    console.log("THIS ONE", this.props)
    return (
      <Swiper
        loop={false}
        showsPagination={false}
        index={1}>
        <View style={this.viewStyle()}>
          <Text style={{fontWeight: '300', fontSize: 30, marginTop: 20, color: 'black'}}>Profile</Text>
          <ListItem avatar>
                        <Left>
                            <Thumbnail source={require("../../assets/images/cyclist.jpg")} />
                        </Left>
                        <Body>
                            <Text style={{fontWeight: '300', fontSize: 18}}>Junjie Jiang</Text>
                            <Text note style={{fontWeight: '100', fontSize: 15}}>Doing what you like will always keep you happy . .</Text>
                        </Body>
                        <Right>
                        </Right>
                    </ListItem>
          <View style={{flex: 1, borderBottomColor: 'grey', borderBottomWidth: 1, borderStyle: 'solid'}}>

            <Text style={{fontSize: 18, fontWeight: '500', color: '#4E4E4E', marginTop: 10}}>Event Name {this.props.name}</Text>
            <Text style={{fontSize: 13, fontWeight: '200', marginTop: 20}}>Retro venmo seitan, la croix before they sold out cronut hell of paleo lomo
            post-ironic organic readymade chillwave salvia try-hard. Mlkshk meditation chambray,
             celiac pop-up letterpress art party sartorial put a bird on it meh prism crucifix disrupt kickstarter. </Text>
          </View>


        </View>
        <Swiper
          horizontal={false}
          loop={false}
          showsPagination={false}
          index={1}>
          <View style={{flex: 1, backgroundColor: 'transparent'}}>
            <Image source={require("../../assets/images/cyclist.jpg")}
              resizeMode = "stretch"
              style={{flex:3, alignItems:'center', width:null, height:null, justifyContent:'center'}}>
            </Image>
            <View style={{flex: 1, padding: 20}}>
              <Text style={{flex: 1, fontSize: 25, fontWeight: '600', color: '#4E4E4E'}}>Cycling Mt.Awesome {this.props.homes}</Text>
              <Text style={{flex: 1, fontSize: 18, fontWeight: '500', color: '#4E4E4E'}}>About the event</Text>
              <Text style={{fontSize: 15, fontWeight: '400', color: '#656565'}}>Retro venmo seitan, la croix before they sold out cronut hell of paleo lomo
              post-ironic organic readymade chillwave salvia try-hard. Mlkshk meditation chambray,
               celiac pop-up letterpress art party </Text>
            </View>
          </View>
        </Swiper>
        <View style={this.viewStyle()}>
          <Text style={{ fontSize: 25, fontWeight: '600', color: '#4E4E4E'}}>Event Name {this.props.image}</Text>
          <Image source={require("../../assets/images/cyclist.jpg")}
            resizeMode = "stretch"
            style={{flex:1, alignItems:'center', width:null, height:null, justifyContent:'center'}}>
          </Image>
          <View style={{flex: 1, padding: 20}}>
            <Text style={{flex: 1, fontSize: 25, fontWeight: '600', color: '#4E4E4E'}}>Cycling Mt.Awesome {this.props.homes}</Text>
          </View>
        </View>
      </Swiper>

    )
  }

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
//
//
// { (this.setState().nav === "component1")? <Component1/> : null}
// {{ (this.setState().nav === "component2")? <Component2/> : null}}


// module.exports = Index;
