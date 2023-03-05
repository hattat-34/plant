import React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import {fontPixel, heightPixel, widthPixel} from '../Utils/Scale';
import {COLORS} from '../Styles';
import {SvgProps} from 'react-native-svg';
import PlantText from './PlantText';

interface Props {
  style?: ViewStyle;
  icon: React.FC<SvgProps>;
  title: string;
  label: string;
}

const PaywallCard = ({style, icon, title, label}: Props) => {
  const iconProps = {
    style: styles.icon,
    width: widthPixel(36),
    height: heightPixel(36),
  };
  
  return (
    <View style={[styles.container, style]}>
      {icon && React.createElement(icon, iconProps)}
      <PlantText style={styles.title}>{title}</PlantText>
      <PlantText style={styles.label}>{label}</PlantText>
    </View>
  );
};

export default PaywallCard;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#22302B',
    width: widthPixel(156),
    height: heightPixel(130),
    borderRadius: 14,
  },
  title: {
    fontSize: fontPixel(20),
    fontWeight: '500',
    color: COLORS.WHITE,
    marginBottom: heightPixel(5),
  },
  label: {
    fontSize: fontPixel(13),
    color: 'rgba(255, 255, 255, 0.7)',
  },
  icon: {
    marginBottom: heightPixel(16),
  },
});
