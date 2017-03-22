import React, { Component, PropTypes } from 'react';
import { View, ActivityIndicatorIOS, AsyncStorage, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/loginAction';
import SocketIOClient from 'socket.io-client';
import Tabs from '../components/tabs';
import Login from '../components/login'


class BetaVuew extends Component {
  componentDidMount() {

      AsyncStorage.getItem('user')
          .then(result => {
            var parsedResult = JSON.parse(result);
            var token = parsedResult.token;
            if (token) {
              this.props.navigator.push({
               component: Swipe,
               title: "Main"
              });
            }
          }).catch(err => {console.log('error', err)})
    }
  render() {
        const { actions, login, profile } = this.props;
        let tabsComponent = <Tabs onPress={() => actions.logout()} profile={profile} />;
        let loginComponent = <Login onPress={() => actions.login()} />;

        if(login.error) {
            loginComponent = <View><Login onPress={() => actions.login()} /><Text style={styles.text}>{login.error}</Text></View>;
        }

        if(login.loading) {
            // loginComponent = <ActivityIndicatorIOS size="large" color="#3b5998" />;
            // tabsComponent = <ActivityIndicatorIOS size="large" color="#3b5998" />;
        }

        return (
            <View style={{flex: 1}}>
            { login.loggedIn ? tabsComponent : loginComponent }
            </View>
        );
  }
}

BetaVuew.propTypes = {
    login: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};


function mapStateToProps(state) {
    return {
        login: state.get('login'),
        profile: state.get('profile')
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actionCreators, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(BetaVuew);
