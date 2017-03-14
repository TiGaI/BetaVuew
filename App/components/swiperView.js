import React, { Component } from 'react';
import { AppRegistry, ScrollView, StyleSheet, Text, View, TextInput, TouchableOpacity, NavigatorIOS, ListView, Alert, AsyncStorage, Image } from 'react-native';
import Swiper from 'react-native-swiper'
import randomcolor from 'randomcolor'

class TitleText extends Component {
  render() {
    return (
      <Text style={{ fontSize: 48, color: 'white' }}>
        {this.props.label}
      </Text>
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
      backgroundColor: randomcolor(),
      justifyContent: 'center',
      alignItems: 'center',
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
          <TitleText label={this.props.name} />
        </View>
        <Swiper
          horizontal={false}
          loop={false}
          showsPagination={false}
          index={1}>
          <View style={this.viewStyle()}>
            <TitleText label={this.props.image} />
          </View>
        </Swiper>
        <View style={this.viewStyle()}>
          <TitleText label={this.props.homes} />
        </View>
      </Swiper>

    )
  }

}


module.exports = Swipe;
