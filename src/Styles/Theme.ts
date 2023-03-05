import {DefaultTheme} from '@react-navigation/native';
import COLORS from './Colors';

const Light = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: COLORS.WHITE,
    text: COLORS.BLACK,
  },
};

export default {Light};
