import React from 'react';
import {ImageBackground, StyleProp, StyleSheet, ViewStyle} from 'react-native';
import {COLORS} from '../Styles';
import {fontPixel, heightPixel, widthPixel} from '../Utils/Scale';
import PlantText from './PlantText';

interface Props {
  style?: StyleProp<ViewStyle>;
  title: string;
  uri: string;
}

const PlantCard = ({style, title, uri}: Props) => {
  return (
    <ImageBackground
      style={[styles.container, style]}
      imageStyle={styles.imgStyle}
      source={{
        uri,
      }}
      resizeMode="contain">
      <PlantText style={styles.title}>{title}</PlantText>
    </ImageBackground>
  );
};

export default PlantCard;

const styles = StyleSheet.create({
  container: {
    width: widthPixel(158),
    height: heightPixel(152),
  },
  imgStyle: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 12,
  },
  title: {
    fontSize: fontPixel(16),
    fontWeight: '500',
    marginTop: heightPixel(16),
    marginLeft: widthPixel(16),
  },
});
