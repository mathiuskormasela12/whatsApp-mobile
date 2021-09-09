// ========== TextField
// import all modules
import React, {Fragment} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {Gray, Dark} from '../styles/colors';

export function TextField(props) {
	return (
		<Fragment>
			<View>
				<TextInput
					style={styled.input(props.center)}
					placeholder={props.placeholder}
					placeholderTextColor={Gray}
					keyboardType={props.type}
					onPress={props.onPress}
					maxLength={props.maxLength}
					onChangeText={props.onChangeText}
					value={props.value}
				/>
			</View>
		</Fragment>
	);
}

const styled = StyleSheet.create({
	input: function (center) {
		if (center) {
			return {
				backgroundColor: 'rgba(243, 243, 243, 0.5)',
				width: '100%',
				height: 50,
				paddingHorizontal: 25,
				fontFamily: 'Geometria',
				borderRadius: 9,
				color: Dark,
				fontSize: 16,
				textAlign: 'center',
			};
		} else {
			return {
				backgroundColor: 'rgba(243, 243, 243, 0.5)',
				width: '100%',
				height: 50,
				paddingHorizontal: 25,
				fontFamily: 'Geometria',
				borderRadius: 9,
				color: Dark,
				fontSize: 16,
			};
		}
	},
});
