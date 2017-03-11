var React = require('react');
import { AppRegistry, StyleSheet, Text, View, TextInput, TouchableOpacity, NavigatorIOS, ListView, Alert, AsyncStorage, Image } from 'react-native';

const Index = React.createClass({
  render(){
    return(
      <View style={{flex: 1, marginTop: 20}}>
        <Text>Sports</Text>
        <Image source={require("../images/cyclist.jpg")}
                  resizeMode = "contain"
                  style={{flex:1, alignItems:'center', width:300, height:300}}/>
        <Text>Art</Text>
        <Image source={require("../images/cyclist.jpg")}
                  resizeMode = "contain"
                  style={{flex:1, alignItems:'center', width:300, height:300}}/>
        <Text>Food</Text>
        <Image source={require("../images/cyclist.jpg")}
                  resizeMode = "contain"
                  style={{flex:1, alignItems:'center', width:300, height:300}}/>
      </View>
    )
  }
});


module.exports = Index;
