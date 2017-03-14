import React, { Component } from 'react';
import { View } from 'react-native';
import SocketIOClient from 'socket.io-client';
import Tabs from '../components/tabs';

class BetaVuew extends Component {
  constructor(props) {
    super(props);
    this.socket = SocketIOClient('http://localhost:8080', {
      transports: ['websocket']
    })
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <Tabs />
      </View>
      );
  }
}

export default BetaVuew
