import React from 'react';
import {
  ImageBackground,
  Linking,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {COLORS} from '../Styles';
import {fontPixel, heightPixel, widthPixel} from '../Utils/Scale';
import PlantText from './PlantText';

interface Props {
  style?: StyleProp<ViewStyle>;
  title: string;
  imgUri: string;
  uri: string;
}

const QuestionCard = ({style, title, imgUri, uri}: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={() => Linking.openURL(uri)}>
      <ImageBackground
        style={[styles.container, style]}
        imageStyle={styles.imgStyle}
        source={{
          uri: imgUri,
        }}
        resizeMode="cover">
        <PlantText style={styles.title}>{title}</PlantText>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default QuestionCard;

const styles = StyleSheet.create({
  container: {
    width: widthPixel(240),
    height: heightPixel(164),
  },
  imgStyle: {
    borderRadius: 12,
  },
  title: {
    fontSize: fontPixel(15),
    fontWeight: '500',
    color: COLORS.WHITE,
    marginLeft: widthPixel(14),
    marginTop: heightPixel(111),
  },
});
