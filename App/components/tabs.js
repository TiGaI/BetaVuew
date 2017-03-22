import { View, Text, TabBarIOS, TouchableOpacity } from 'react-native';
import { Container, Content, Left, Body, Right, ListItem, Thumbnail } from 'native-base';
import React, { Component } from 'react';
import styles from './styles';
import { connect } from 'react-redux';
import { actions as navigationActions } from 'react-native-navigation-redux-helpers';
const { jumpTo } = navigationActions;
import IndexPage from './index';
import SocketIOClient from 'socket.io-client';
import CreateEvent from './createEvent';


class ApplicationTabs extends Component {
	_renderTabContent(tab) {
		if (tab.key === 'search') {
			return (
				<IndexPage />
			);
		}

		if (tab.key === 'notifications') {
			return (
				<View style={[styles.tabContent, {backgroundColor: 'green'}]} >
					<TouchableOpacity><Text>Chat</Text></TouchableOpacity>
				</View>
			);
		}

		if (tab.key === 'chat') {
			return (
				<ListItem avatar style={{marginTop: 20}}>
											<Left>
													<Thumbnail source={require('../../assets/images/cyclist.jpg')} />
											</Left>
											<Body>
													<Text>Kumar Pratik</Text>
													<Text note>Doing what you like will always keep you happy . .</Text>
											</Body>
											<Right>
													<Text note>3:43 pm</Text>
											</Right>
									</ListItem>
			);
		}

		if (tab.key === 'profile') {
			return (
				<CreateEvent />
			);
		}

		return <Text>SOmething went wrong</Text>;
	}

	render() {
		const { dispatch, navigation } = this.props;
		const children = navigation.routes.map( (tab, i) => {
			return (
				<TabBarIOS.Item key={tab.key}
						icon={tab.icon}
						selectedIcon={tab.selectedIcon}
						title={tab.title} onPress={ () => dispatch(jumpTo(i, navigation.key)) }
						selected={this.props.navigation.index === i}>
						{ this._renderTabContent(tab) }
				</TabBarIOS.Item>
			);
		});
		return (
			<TabBarIOS
				unselectedTintColor='black'
				tintColor='black'
				unselectedItemTintColor="gray"
				barTintColor='white'>
				{children}
			</TabBarIOS>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return {
		dispatch
	};
}

function mapStateToProps(state) {
	return {
		navigation: state.get('tabs')
	};
}
export default connect(mapStateToProps, mapDispatchToProps)(ApplicationTabs);
