import React, { Component } from 'react';
import { NavigatorIOS, View } from 'react-native';

import ProfilePage from './myProfilePage'

export default class CreatEventIndex extends Component {
  render(){
      const {actions } = this.props;
      return (
        <View style={{flex:1}}>
          <NavigatorIOS
          style={{flex: 1}}
          initialRoute={{
              component: ProfilePage,
              title: 'ProfilePage',
              showTabBar: true
            }}
            navigationBarHidden={false}>
          </NavigatorIOS>
        </View>
      )
    }
}

module.exports = CreatEventIndex;
