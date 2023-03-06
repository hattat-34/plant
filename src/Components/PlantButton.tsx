import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {COLORS} from '../Styles';
import {heightPixel, widthPixel} from '../Utils/Scale';

interface Props extends TouchableOpacityProps {
  title?: string;
}

const PlantButton = (props: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      {...props}
      style={[styles.btn, props.style]}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    paddingVertical: heightPixel(16),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.APP_GREEN,
    borderRadius: widthPixel(12),
  },
  text: {
    fontFamily: 'SF Pro Text',
    fontSize: heightPixel(15),
    fontWeight: '700',
    color: COLORS.WHITE,
  },
});

export default PlantButton;
