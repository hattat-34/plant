import {StyleSheet} from 'react-native';
import {fontPixel, heightPixel, widthPixel} from '../Utils/Scale';

export default StyleSheet.create({
  title: {
    marginBottom: heightPixel(8),
    fontSize: fontPixel(28),
    width: widthPixel(330),
  },
  titleBold: {
    fontSize: fontPixel(28),
    fontWeight: 'bold',
  },
  titleExtraBold: {
    fontSize: fontPixel(28),
    fontWeight: '800',
  },
});
