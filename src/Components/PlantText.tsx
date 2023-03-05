/**
 * A Themed Wrapper Around React Native Text Component
 */
import {useTheme} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TextProps} from 'react-native';
import {fontPixel} from '../Utils/Scale';

const PText = (props: TextProps) => {
  const theme = useTheme();
  const themedStyles = {
    color: theme.colors.text,
  };

  return (
    <Text {...props} style={[styles.text, themedStyles, props.style]}>
      {props.children}
    </Text>
  );
};

PText.defaultProps = {
  style: {},
  allowFontScaling: false,
};

export default PText;

const styles = StyleSheet.create({
  text: {
    fontFamily: "Rubik",
    fontSize: fontPixel(14),
  },
});