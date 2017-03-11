import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TextInput, TouchableOpacity, NavigatorIOS, ListView, Alert, AsyncStorage, Image } from 'react-native';
import SocketIOClient from 'socket.io-client';


import Components from '../components/index';

export default class BetaVuew extends Component {
  constructor(props) {
    super(props);
    this.socket = SocketIOClient('http://localhost:8080', {
      transports: ['websocket']
    })
  }
  render() {
    return (
      <View style={ styles.container }>
        <Components/>
      </View>
      );
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
