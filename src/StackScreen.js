// ========== StackScreen
// import all modules
import React, {Fragment, useEffect} from 'react';
import RNBootSplash from 'react-native-bootsplash';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import all screens
import Auth from './screens/Auth';

const Stack = createNativeStackNavigator();

function StackScreen() {
	useEffect(() => {
		RNBootSplash.hide({fade: true});
	});

	return (
		<Fragment>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen
						name="Auth"
						component={Auth}
						options={{headerShown: false}}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</Fragment>
	);
}

export default StackScreen;
