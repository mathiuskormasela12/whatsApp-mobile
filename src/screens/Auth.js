// ========== Auth
// import all modules
import React, {Component, Fragment} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import sizeGenerator from '../helpers/sizeGenerator';

// import all components
import {AuthHeader, Container, PhoneNumberField, Button} from '../components';

class Auth extends Component {
	render() {
		return (
			<Fragment>
				<ScrollView>
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
							<View style={styled.footer}>
								<Text style={styled.footerDescription}>
									Read our Privacy Policy. Tap “Agree & Continue” to accept the
									Terms of Service.
								</Text>
								<View style={styled.origin}>
									<Text style={styled.fromText}>From</Text>
									<Text style={styled.originText}>Facebook</Text>
								</View>
							</View>
						</Container>
					</View>
				</ScrollView>
			</Fragment>
		);
	}
}

export default Auth;

const styled = StyleSheet.create({
	hero: {
		minHeight: sizeGenerator('window', 'height', 100),
		backgroundColor: 'white',
		justifyContent: 'center',
	},
	form: {},
	control: {
		marginBottom: 50,
	},
	footer: {
		marginTop: 20,
	},
	footerDescription: {
		textAlign: 'center',
		lineHeight: 19.3,
		fontSize: 14,
		fontFamily: 'Geometria',
	},
	origin: {
		marginTop: 35,
	},
	fromText: {
		fontFamily: 'Geometria',
		textAlign: 'center',
		fontSize: 14,
		marginBottom: 5,
	},
	originText: {
		fontFamily: 'Geometria',
		textAlign: 'center',
		fontSize: 16,
		textTransform: 'uppercase',
	},
});
