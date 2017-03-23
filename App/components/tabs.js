import { View, Text, TabBarIOS, TouchableOpacity } from 'react-native';
import React, { Component, PropTypes } from 'react';
import styles from './styles';
import { connect } from 'react-redux';
import { actions as navigationActions } from 'react-native-navigation-redux-helpers';
const { jumpTo } = navigationActions;
import IndexPage from './index';
import Swipe from './swiperView';
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
				<CreateEvent />
			);
		}

		if (tab.key === 'chat') {
			return (
				<View style={[styles.tabContent, {backgroundColor: 'pink'}]}>
				</View>
			);
		}

		if (tab.key === 'profile') {
			return (
				<View style={[styles.tabContent, {backgroundColor: 'red'}]} >
					<Swipe/>
				</View>

			);
		}

		return <Text>SOmething went wrong</Text>;
	}

	render() {
		const { dispatch, navigation, indexPage } = this.props;
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

ApplicationTabs.propTypes = {
    onPress: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
	return {
		dispatch
	};
}

function mapStateToProps(state) {
	return {
		navigation: state.get('tabs'),
		indexPage: state.get('indexPage')
	};
}
export default connect(mapStateToProps, mapDispatchToProps)(ApplicationTabs);
