// ========== Container
// import all modules
import React, {Fragment} from 'react';
import {View, StyleSheet} from 'react-native';
import sizeGenerator from '../helpers/sizeGenerator';

export function Container(props) {
	return (
		<Fragment>
			<View style={styled.container(props.size)}>{props.children}</View>
		</Fragment>
	);
}

const styled = StyleSheet.create({
	container: function (size) {
		return {
			width: sizeGenerator('window', 'width', size),
			marginTop: 0,
			marginBottom: 0,
			marginLeft: 'auto',
			marginRight: 'auto',
		};
	},
});
