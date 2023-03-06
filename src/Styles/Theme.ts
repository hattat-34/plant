import {DefaultTheme} from '@react-navigation/native';
import COLORS from './Colors';

const Light = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: COLORS.BG_WHITE,
    text: COLORS.MAIN_TEXT,
  },
};

export default {Light};
