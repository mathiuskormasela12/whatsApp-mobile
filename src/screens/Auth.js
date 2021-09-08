// ========== Auth
// import all modules
import React, {Component, Fragment} from 'react';
import {View, StyleSheet} from 'react-native';

// import all components
import {AuthHeader, Container, PhoneNumberField, Button} from '../components';

class Auth extends Component {
	render() {
		return (
			<Fragment>
				<View style={styled.hero}>
					<Container size={75}>
						<AuthHeader />
						<View style={styled.form}>
							<View style={styled.control}>
								<PhoneNumberField />
							</View>
							<View style={styled.control}>
								<Button>Send</Button>
							</View>
						</View>
					</Container>
				</View>
			</Fragment>
		);
	}
}

export default Auth;

const styled = StyleSheet.create({
	hero: {
		flex: 1,
		backgroundColor: 'white',
	},
	form: {},
	control: {
		marginBottom: 50,
	},
});
