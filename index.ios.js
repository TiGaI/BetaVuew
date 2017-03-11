import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TextInput, TouchableOpacity, NavigatorIOS, ListView, Alert, AsyncStorage, Image } from 'react-native';
import SocketIOClient from 'socket.io-client';

import BetaVuew from './App/container/indexios';



AppRegistry.registerComponent('BetaVuew', () => BetaVuew);
