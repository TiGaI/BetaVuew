import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableHighlight
} from  'react-native';
import { style, colors } from './stylesformessage';

class AuthorEntry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    };
  }

  _onPress() {
    this.props.onSubmit(this.state.text);
    this.setState({ text: '' });
  }

  render() {
    return (
      <View>
        <TextInput
          {...style('textInput')}
          value={this.state.text}
          onChangeText={(text) => this.setState({ text })}
          />
        <TouchableHighlight
          onPress={() => this._onPress()}
          {...style('button')}
          underlayColor={colors.primaryHighlight}>
          <Text {...style('buttonLabel')}>Send</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

AuthorEntry.propTypes = {
  onSubmit: React.PropTypes.func.isRequired
};

module.exports = AuthorEntry;
