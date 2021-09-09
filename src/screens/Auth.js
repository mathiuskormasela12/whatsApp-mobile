// ========== Auth
// import all modules
import React, {Component, Fragment} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import sizeGenerator from '../helpers/sizeGenerator';

// import all components
import {
	AuthHeader,
	Container,
	PhoneNumberField,
	Button,
	TextField,
} from '../components';
import {Dark} from '../styles/colors';

class Auth extends Component {
	constructor() {
		super();

		this.state = {
			step: 1,
			value: '',
		};

		this.handleInput = this.handleInput.bind(this);
		this.handleNextStep = this.handleNextStep.bind(this);
	}

	handleInput(value) {
		this.setState({
			value,
		});
	}

	handleNextStep() {
		this.setState(currentState => ({
			step: currentState.step + 1,
			value: '',
		}));
	}

	render() {
		return (
			<Fragment>
				<ScrollView>
					<View style={styled.hero}>
						<Container size={75}>
							<AuthHeader />
							{this.state.step === 1 ? (
								<Fragment>
									<View style={styled.form}>
										<View style={styled.control}>
											<PhoneNumberField
												value={this.state.value}
												onChangeText={this.handleInput}
											/>
										</View>
										<View style={styled.control}>
											{this.state.value.length > 0 ? (
												<Fragment>
													<Button onPress={this.handleNextStep}>Send</Button>
												</Fragment>
											) : (
												<Fragment>
													<Button onPress={this.handleNextStep} disabled>
														Send
													</Button>
												</Fragment>
											)}
										</View>
									</View>
								</Fragment>
							) : this.state.step === 2 ? (
								<Fragment>
									<View style={styled.form}>
										<View style={styled.control}>
											<View style={styled.field}>
												<Text style={styled.label}>Enter SMS Code</Text>
											</View>
											<TextField
												type="numeric"
												placeholder="Write Your SMS Code"
												maxLength={5}
												value={this.state.value}
												onChangeText={this.handleInput}
											/>
										</View>
										<View style={styled.control}>
											{this.state.value.length > 0 ? (
												<Fragment>
													<Button onPress={this.handleNextStep}>Verify</Button>
												</Fragment>
											) : (
												<Fragment>
													<Button onPress={this.handleNextStep} disabled>
														Verify
													</Button>
												</Fragment>
											)}
										</View>
									</View>
								</Fragment>
							) : (
								<Fragment>
									<View style={styled.form}>
										<View style={styled.control}>
											<View style={styled.field}>
												<Text style={styled.label}>Enter Your Name</Text>
											</View>
											<TextField
												type="default"
												placeholder="Write Your Name"
												value={this.state.value}
												onChangeText={this.handleInput}
											/>
										</View>
										<View style={styled.control}>
											{this.state.value.length > 0 ? (
												<Fragment>
													<Button onPress={this.handleNextStep}>Done</Button>
												</Fragment>
											) : (
												<Fragment>
													<Button onPress={this.handleNextStep} disabled>
														Done
													</Button>
												</Fragment>
											)}
										</View>
									</View>
								</Fragment>
							)}
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
	field: {
		marginBottom: 25,
	},
	label: {
		textAlign: 'center',
		fontSize: 14,
		fontFamily: 'Geometria-Regular',
		color: Dark,
	},
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
