// ========== Auth Header
// import all modules
import React, {Fragment} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Dark} from '../styles/colors';

// import all assets
import Logo from '../assets/img/logo.svg';

export function AuthHeader() {
	return (
		<Fragment>
			<View style={styled.header}>
				<View style={styled.figure}>
					<Logo style={styled.img} />
					<Text style={styled.title}>Welcome to WhatsApp</Text>
				</View>
			</View>
		</Fragment>
	);
}

const styled = StyleSheet.create({
	header: {
		height: 'auto',
		paddingTop: 110,
		paddingBottom: 40,
	},
	figure: {},
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
