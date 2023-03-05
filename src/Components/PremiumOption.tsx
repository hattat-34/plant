import React from 'react';
import {
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
  TouchableWithoutFeedback,
} from 'react-native';
import {COLORS} from '../Styles';
import {heightPixel, widthPixel} from '../Utils/Scale';
import PlantText from './PlantText';
import Radio from './Radio';

// TO DO - Gradient background color

interface Props {
  selected: boolean;
  onSelected: () => void;
  title: string;
  description: string;
  discount?: number;
  style?: StyleProp<ViewStyle>;
}

const PremiumOption = ({
  selected = false,
  onSelected,
  discount,
  title,
  description,
  style,
}: Props) => {
  return (
    <TouchableWithoutFeedback onPress={onSelected}>
      <View
        style={[
          styles.container,
          {borderColor: selected ? COLORS.APP_GREEN : COLORS.BORDER_GRAY},
          style,
        ]}>
        <Radio size={widthPixel(22)} selected={selected} />
        <View style={styles.content}>
          <PlantText style={styles.title}>{title}</PlantText>
          <PlantText style={styles.subTitle}>{description}</PlantText>
        </View>
        {discount ? (
          <View style={styles.discountContainer}>
            <PlantText style={styles.discountLabel}>Save {discount}%</PlantText>
          </View>
        ) : null}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default PremiumOption;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    width: widthPixel(327),
    height: heightPixel(60),
    borderRadius: 14,
    padding: 16,
    borderWidth: 1.5,
  },
  content: {
    marginLeft: widthPixel(12),
  },
  title: {
    fontSize: widthPixel(16),
    fontWeight: '500',
    color: COLORS.WHITE,
  },
  subTitle: {
    fontSize: widthPixel(12),
    fontWeight: '400',
    color: 'rgba(255, 255, 255, 0.7)',
  },
  discountContainer: {
    backgroundColor: COLORS.APP_GREEN,
    width: widthPixel(77),
    height: heightPixel(26),
    position: 'absolute',
    right: 0,
    top: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 14,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 20,
  },
  discountLabel: {
    position: 'absolute',
    top: heightPixel(5),
    right: widthPixel(10),
    fontSize: widthPixel(12),
    fontWeight: '500',
    color: COLORS.WHITE,
  },
});
