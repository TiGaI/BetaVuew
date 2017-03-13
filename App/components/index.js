
import React, { Component } from 'react';
import { AppRegistry, ScrollView, StyleSheet, Text, View, TextInput, TouchableOpacity, NavigatorIOS, ListView, Alert, AsyncStorage, Image } from 'react-native';
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

class TitleText extends React.Component {
  render() {
    return (
      <Text style={{ fontSize: 48, color: 'white' }}>
        {this.props.label}
      </Text>
    )
  }
}


var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class Index extends Component {
  constructor(props){
    super(props)
    this.state = {
      dataviewed:ds.cloneWithRows(viewed),
      datafav:ds.cloneWithRows(favs),
      clicked: true
    }
  }

  favourites(val){
     return(
      <TouchableOpacity onPress={this.press.bind(this,val)}>
      <Image source={val.image} resizeMode="stretch" style={{width:330, height:220, margin:5,marginBottom:30, justifyContent:'center', alignItems:'center'}}>
      <Text style={{backgroundColor:'rgba(0,0,0,0)', textAlign:'center', color:'#fff', fontSize:25, fontWeight:'700'}}>{val.name}</Text>
      <Text style={{backgroundColor:'rgba(0,0,0,0)', color:'#fff',fontSize:13, fontWeight:'600'}}>{val.homes} homes</Text>
      </Image>
      </TouchableOpacity>
      )
  }
  componentDidMount(){
}
viewStyle() {
    return {
      flex: 1,
      backgroundColor: randomcolor(),
      justifyContent: 'center',
      alignItems: 'center',
    }
  }
press(val) {
  console.log(val);
  this.setState({
    clicked: false
  });
}
endReached(){
  console.log('hit end')
  favs = favs.concat(favs);
  this.setState({datafav: ds.cloneWithRows(favs)})//this.state.datafav.concat(favs))})
}
  render(){
    return(
      <View style={{flex:1}}>
      {this.state.clicked ?
      (<View style={{flex:1}}>
      <ScrollView style={{flex:1}}>
      <View style={styles.container2}>
      <Text style={styles.title}>Sports</Text>
      <ListView
      dataSource = {this.state.datafav}
      renderRow={(rowData) => this.favourites(rowData)}
      horizontal = {true}
      showsHorizontalScrollIndicator = {false}
      onEndReachedThreshold = {500}
      onEndReached={this.endReached.bind(this)}
      />
      <Text style={styles.title}>Art</Text>
      <ListView
      dataSource = {this.state.datafav}
      renderRow={(rowData) => this.favourites(rowData)}
      horizontal = {true}
      showsHorizontalScrollIndicator = {false}
      onEndReachedThreshold = {500}
      onEndReached={this.endReached.bind(this)}
      />
      <Text style={styles.title}>Food</Text>
      <ListView
      dataSource = {this.state.datafav}
      renderRow={(rowData) => this.favourites(rowData)}
      horizontal = {true}
      showsHorizontalScrollIndicator = {false}
      onEndReachedThreshold = {500}
      onEndReached={this.endReached.bind(this)}
      />
      <Text style={styles.title}>Food</Text>
      <ListView
      dataSource = {this.state.datafav}
      renderRow={(rowData) => this.favourites(rowData)}
      horizontal = {true}
      showsHorizontalScrollIndicator = {false}
      onEndReachedThreshold = {500}
      onEndReached={this.endReached.bind(this)}
      />
      <Text style={styles.title}>Food</Text>
      <ListView
      dataSource = {this.state.datafav}
      renderRow={(rowData) => this.favourites(rowData)}
      horizontal = {true}
      showsHorizontalScrollIndicator = {false}
      onEndReachedThreshold = {500}
      onEndReached={this.endReached.bind(this)}
      />
      </View>
      </ScrollView>
      </View>)
      :
      (<Swiper
        loop={false}
        showsPagination={false}
        index={1}>
        <View style={this.viewStyle()}>
          <TitleText label="Left" />
        </View>
        <Swiper
          horizontal={false}
          loop={false}
          showsPagination={false}
          index={1}>
          <View style={this.viewStyle()}>
            <TitleText label="Top" />
          </View>
          <View style={this.viewStyle()}>
            <TitleText label="Home" />
          </View>
          <View style={this.viewStyle()}>
            <TitleText label="Bottom" />
          </View>
        </Swiper>
        <View style={this.viewStyle()}>
          <TitleText label="Right" />
        </View>
      </Swiper>)
    }
    </View>
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


module.exports = Index;
