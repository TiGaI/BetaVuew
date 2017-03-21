import React, { Component, PropTypes } from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity
} from 'react-native';

class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.props.onPress}>
                <Text> Login With Facebook </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

Login.propTypes = {
    onPress: PropTypes.func.isRequired
};

export default Login;
