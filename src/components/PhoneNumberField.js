// ========== Phone Number Field
// import all modules
import React, {Fragment} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

// import all colors
import {Danger, Dark, Gray, Light} from '../styles/colors';

export function PhoneNumberField() {
	return (
		<Fragment>
			<View style={styled.input}>
				<View style={styled.leftSide}>
					<View style={styled.flag}>
						<View style={styled.flagDanger} />
						<View style={styled.flagLight} />
					</View>
					<View>
						<Text style={styled.phoneCode}>+62</Text>
					</View>
				</View>
				<View style={styled.rightSide}>
					<TextInput
						style={styled.textInput}
						placeholder="895326176440"
						placeholderTextColor={Gray}
						keyboardType="phone-pad"
					/>
				</View>
			</View>
		</Fragment>
	);
}

const styled = StyleSheet.create({
	input: {
		backgroundColor: 'rgba(243, 243, 243, 0.5)',
		width: '100%',
		height: 50,
		paddingHorizontal: 20,
		flexDirection: 'row',
		alignItems: 'center',
	},
	flag: {
		width: 30,
		height: 20,
		backgroundColor: Light,
		marginRight: 10,
	},
	flagLight: {
		height: '50%',
		width: '100%',
		backgroundColor: 'white',
	},
	flagDanger: {
		height: '50%',
		width: '100%',
		backgroundColor: Danger,
	},
	phoneCode: {
		color: Dark,
		fontSize: 16,
	},
	leftSide: {
		flexDirection: 'row',
		alignItems: 'center',
		flex: 1,
	},
	rightSide: {
		flex: 2,
	},
	textInput: {
		width: '100%',
		height: '100%',
		color: Dark,
	},
});
