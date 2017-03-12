import React, { Component, PropTypes } from 'react-native';
import { AppRegistry, StyleSheet, Text, View, TextInput, TouchableOpacity, NavigatorIOS, ListView, Alert, AsyncStorage, Image } from 'react-native';

export default class Login extends Component{
  componentWillMount() {
  this.authCheck(this.props.authToken);
  }
  componentWillReceiveProps(nextProps) {
    this.authCheck(nextProps.authToken);
  }
  renderLoginButton(){
      return (
        <TouchableOpacity onPress={this.props.onPress}>
        <Text style={styles.welcome}>
          Facebook Login
        </Text>
        </TouchableOpacity>
      );
  }
    render() {
        return (
          <View style={styles.container}>
            {this.renderLoginButton()}
          </View>
        );
    }
  }

var styles = StyleSheet.create({
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
  }
});

Login.propTypes = {
    onPress: PropTypes.func.isRequired
};
