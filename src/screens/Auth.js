// ========== Auth
// import all modules
import React, {Component, Fragment} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class Auth extends Component {
	render() {
		return (
			<Fragment>
				<View style={styled.container}>
					<Text style={styled.title}>Auth</Text>
				</View>
			</Fragment>
		);
	}
}

export default Auth;

const styled = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
	},
	title: {
		fontFamily: 'ProximaNova-Regular',
	},
});
