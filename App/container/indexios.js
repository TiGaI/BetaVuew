import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TextInput, TouchableOpacity, NavigatorIOS, ListView, Alert, AsyncStorage, Image } from 'react-native';
import SocketIOClient from 'socket.io-client';

import { createStore, applyMiddleware, combineReducers } from 'redux';

// import * as reducers from '../reducers';
import Components from '../components/index';
import reducer from '../reducers/reducersIndex'
// const reducer = combineReducers(reducers);
const store = createStore(reducer);
var Actions = require('../actions/action');
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

function render(){
  return (
    <View style={ styles.container }>
      <Components store={store} Actions={Actions} />
    </View>
    );
}
render();

// Note: subscribing and rerendering here, at the top level, is using a
// large hammer for a small nail. It's simple and it works, but it's
// inefficient. It's better if each component listens just for changes
// that affect it, individually. react-redux does this for us if we use
// its connect function. See
// http://redux.js.org/docs/basics/UsageWithReact.html and
// https://github.com/reactjs/react-redux for more info.
store.subscribe(render);

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
        <Components store={store} Actions={Actions} />
      </View>
      );
  }
}


// var render =  function(){
//   return (
//     <View style={ styles.container }>
//       <Components/>
//     </View>
//     );
// }
// render();
//
// // Note: subscribing and rerendering here, at the top level, is using a
// // large hammer for a small nail. It's simple and it works, but it's
// // inefficient. It's better if each component listens just for changes
// // that affect it, individually. react-redux does this for us if we use
// // its connect function. See
// // http://redux.js.org/docs/basics/UsageWithReact.html and
// // https://github.com/reactjs/react-redux for more info.
// store.subscribe(render);
