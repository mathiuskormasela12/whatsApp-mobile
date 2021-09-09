// ========== Auth Header
// import all modules
import React, {Fragment} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Dark, Light} from '../styles/colors';

// import all assets
import Logo from '../assets/img/logo.svg';

export function AuthHeader() {
	return (
		<Fragment>
			<View style={styled.header}>
				<Logo style={styled.img} />
				<Text style={styled.title}>Welcome to WhatsApp</Text>
			</View>
		</Fragment>
	);
}

const styled = StyleSheet.create({
	header: {
		height: 'auto',
		backgroundColor: Light,
		marginBottom: 60,
	},
	title: {
		marginTop: 35,
		color: Dark,
		fontSize: 24.5,
		textAlign: 'center',
		fontFamily: 'Geometria',
		fontWeight: 'bold',
	},
	img: {
		alignSelf: 'center',
		height: 100,
		width: 100,
		resizeMode: 'contain',
	},
});
