var React = require('react');
import { AppRegistry, StyleSheet, Text, View, TextInput, TouchableOpacity, NavigatorIOS, ListView, Alert, AsyncStorage, Image } from 'react-native';

const Index = React.createClass({
  render(){
    return(
      <NavigatorIOS
      initialRoute={{
        component: Login,
        title: "Login"
      }}
      style={{flex: 1}}
      navigationBarHidden={true}
      />
    )
  }
});

module.exports = Index;
