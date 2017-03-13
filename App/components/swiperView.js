import React, { Component } from 'react';
import { AppRegistry, ScrollView, StyleSheet, Text, View, TextInput, TouchableOpacity, NavigatorIOS, ListView, Alert, AsyncStorage, Image } from 'react-native';
import Swiper from 'react-native-swiper'
import randomcolor from 'randomcolor'

const SwiperView = React.createClass({
  render(){
    return(
      <Swiper
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
  });

module.exports = SwiperView;
