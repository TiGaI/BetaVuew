
import React  from 'react';
import Component from 'react';
import { AppRegistry, StyleSheet, Text, View, TextInput, TouchableOpacity, NavigatorIOS, ListView, Alert, AsyncStorage, Image } from 'react-native';
import SocketIOClient from 'socket.io-client';

import { createStore, applyMiddleware, combineReducers } from 'redux';

// import * as reducers from '../reducers';
import Components from '../components/index';
import reducer from '../reducers/reducersIndex'

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

export default class BetaVuew extends Component {
  // constructor() {
  //   console.log(props);
  //   super();
  //   this.socket = SocketIOClient('http://localhost:8080', {
  //     transports: ['websocket']
  //   })
  // }
  render() {
    return (
      <View style={ styles.container }>
        <Components store={this.props.store} Actions={this.props.Actions} />
      </View>
      );
  }
}
