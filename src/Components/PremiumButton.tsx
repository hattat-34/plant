import Letter from '../Assets/Svg/letter.svg';
import Arrow from '../Assets/Svg/arrow.svg';

import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {fontPixel, heightPixel, widthPixel} from '../Utils/Scale';
import PlantText from './PlantText';

// TO DO - Linear gradient

interface Props {
  wrapperStyle?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

const PremiumButton = ({wrapperStyle, onPress}: Props) => {
  return (
    <View style={wrapperStyle}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={onPress}
        style={styles.btn}>
        <Letter width={widthPixel(52)} height={heightPixel(45)} />
        <View style={styles.labelContainer}>
          <PlantText style={styles.labelBold}>FREE Premium Available</PlantText>
          <PlantText style={styles.label}>
            Tap to upgrade your account!
          </PlantText>
        </View>
        <View style={styles.arrowContainer}>
          <Arrow width={widthPixel(24)} height={heightPixel(24)} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default PremiumButton;

const styles = StyleSheet.create({
  btn: {
    flexDirection: 'row',
    backgroundColor: '#24201A',
    padding: heightPixel(13),
    alignItems: 'center',
    borderRadius: 14,
  },
  labelContainer: {
    marginLeft: widthPixel(5),
  },
  labelBold: {
    color: '#E5C990',
    fontFamily: 'SF Pro Text',
    fontSize: fontPixel(16),
    fontWeight: '700',
  },
  label: {
    color: '#E5C990',
    fontFamily: 'SF Pro Text',
    fontSize: fontPixel(13),
    fontWeight: '400',
  },
  arrowContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
});
