
import React, { Component } from 'react';
import { NavigatorIOS, View } from 'react-native';

import ActivitiesPage from './activitiesPage'

export default class Index extends Component {
  render(){
    const {actions } = this.props;
      return (
        <View style={{flex:1}}>
          <NavigatorIOS
          style={{flex: 1}}
          initialRoute={{
              component: ActivitiesPage,
              title: 'NEWVUEW',
              titleTextColor: 'white',
              barTintColor: '#00A8BE'
            }}
            navigationBarHidden={false}
            >
          </NavigatorIOS>
        </View>
      )
    }
}
module.exports = Index;
