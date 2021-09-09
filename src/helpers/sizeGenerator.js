// ========== Size Generator
// import all modules
import {Dimensions} from 'react-native';

function sizeGenerator(viewport, unit, size) {
	const dimensions = Dimensions.get(viewport);

	return (size / 100) * dimensions[unit];
}

export default sizeGenerator;
