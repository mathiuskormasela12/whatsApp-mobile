// ========== Container
// import all modules
import React, {Fragment} from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';

export function Container(props) {
	return (
		<Fragment>
			<View style={styled.container(props.size)}>{props.children}</View>
		</Fragment>
	);
}

const dimensions = Dimensions.get('window');

const styled = StyleSheet.create({
	container: function (size) {
		return {
			width: (Number(size) / 100) * dimensions.width,
			marginTop: 0,
			marginBottom: 0,
			marginLeft: 'auto',
			marginRight: 'auto',
		};
	},
});
