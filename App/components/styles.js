import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	tabContent: {
		flex: 1,
		alignItems: 'center'
	},
	tabText: {
		color: 'white',
		margin: 50,
	},
	toolbar: {
		backgroundColor: '#E9EAED',
		height: 56,
	},
	profileBox: {
		backgroundColor: "blue",
		flex: 2,
		borderStyle: 'solid',
		alignItems: 'center',
		justifyContent: 'center'
	},
	socialStatus: {
		flex: 3,
		flexDirection: 'row',
		marginTop: 10
	},
	innerbox: {
		flex: 1,
		flexDirection: 'column'
	},
	circle: {
	height: 60, width: 60, borderRadius: 30,
	alignItems: 'center',
	justifyContent: 'center'
	},
	textInCicle:{
		fontSize: 15,
		color: 'white',
		backgroundColor: "transparent",
	},
	profilecontainer: {
		flex: 1,
		width: 300,
		flexDirection: 'row'
	},
	profilePic: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		// position: "relative",
		// bottom: 50,
		// marginBottom: -50
	}
});
