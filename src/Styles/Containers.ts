import {StyleSheet} from 'react-native';
import {widthPixel} from '../Utils/Scale';

export default StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: widthPixel(24),
  },
  rootContainerAlignedCenter: {
    flex: 1,
    padding: widthPixel(24),
    alignItems: 'center',
  },
});
