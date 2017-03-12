import React, { Component, PropTypes } from 'react';
import { View, AsyncStorage } from 'react-native';
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import { persistStore } from 'redux-persist';
import thunkMiddleware from 'redux-thunk';
import { Provider, connect } from 'react-redux';
import { Router, Scene } from 'react-native-router-flux';

import reducers from '../reducers';

import AuthContainer from './Auth';

const store = compose(applyMiddleware(thunkMiddleware))(createStore)(reducers);
persistStore(store, { storage: AsyncStorage });


export default class Indexios extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Provider store={store}>
      <View style={styles.container}>
        <ReduxRouter
          sceneStyle={{ flex: 1 }}
          navigationBarStyle={styles.navigationBar}
          titleStyle={styles.title}
        >
          <Scene key="root" hideNavBar={true}>
                  <Scene
                    key="auth"
                    component={AuthContainer}
                    title="Auth"
                    initial={true}
                  />
                </Scene>
              </ReduxRouter>
            </View>
      </Provider>
    );
  }
}
