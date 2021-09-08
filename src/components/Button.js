// ========== Button
// import all modules
import React, {Fragment} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {Light, Primary} from '../styles/colors';

export function Button(props) {
	return (
		<Fragment>
			<TouchableOpacity {...props} style={styled.button}>
				<Text style={styled.text}>{props.children}</Text>
			</TouchableOpacity>
		</Fragment>
	);
}

const styled = StyleSheet.create({
	button: {
		width: '100%',
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: Primary,
		borderRadius: 20,
	},
	text: {
		color: Light,
		fontSize: 16,
	},
});
