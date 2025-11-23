import 'react-native-gesture-handler/jestSetup';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

jest.mock('react-native', () => {
  const reactNative = jest.requireActual('react-native');
  reactNative.ViewPropTypes = require('deprecated-react-native-prop-types').ViewPropTypes;
  return reactNative;
});
