// ========== App
// import all modules
import React, {Fragment} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import persistedStore from './src/redux/store';
import StackScreen from './src/StackScreen';

function App() {
	const {store, persistor} = persistedStore();

	return (
		<Fragment>
			<Provider store={store}>
				<PersistGate persistor={persistor}>
					<StackScreen />
				</PersistGate>
			</Provider>
		</Fragment>
	);
}

export default App;
