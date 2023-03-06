import HomeIcon from '../Assets/Svg/home-icon.svg';
import HealthIcon from '../Assets/Svg/healthcare.svg';
import ScanIcon from '../Assets/Svg/scan-icon.svg';
import GardenIcon from '../Assets/Svg/garden-icon.svg';
import ProfileIcon from '../Assets/Svg/profile.svg';

import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {RouteProp} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {COLORS} from '../Styles';
import {heightPixel, widthPixel} from '../Utils/Scale';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {TabParamList} from '../Navigation/TabNavigator';
import PlantText from './PlantText';

const pickIcon = (route: RouteProp<TabParamList>, color: string) => {
  switch (route.name) {
    case 'Home':
      return (
        <HomeIcon
          color={color}
          width={widthPixel(25)}
          height={heightPixel(25)}
        />
      );
    case 'Diagnose':
      return (
        <HealthIcon
          color={color}
          width={widthPixel(25)}
          height={heightPixel(25)}
        />
      );
    case 'Scan':
      return (
        <ScanIcon
          style={{marginBottom: heightPixel(45)}}
          color={color}
          width={widthPixel(64)}
          height={heightPixel(64)}
        />
      );
    case 'MyGarden':
      return (
        <GardenIcon
          color={color}
          width={widthPixel(25)}
          height={heightPixel(25)}
        />
      );
    case 'Profile':
      return (
        <ProfileIcon
          color={color}
          width={widthPixel(25)}
          height={heightPixel(25)}
        />
      );
    default:
      return null;
  }
};

const BottomTabBar = (props: BottomTabBarProps) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, {bottom: insets.bottom}]}>
      {props.state.routes.map((route, index) => {
        const handlePress = () => props.navigation.navigate(route.name);
        const focused = props.state.index === index;
        const iconColor = focused ? COLORS.APP_GREEN : COLORS.TAB_GRAY;
        const labelColor = focused ? COLORS.APP_GREEN : COLORS.TAB_LABEL_GRAY;

        return (
          <TouchableOpacity
            key={index}
            style={styles.btn}
            activeOpacity={1}
            onPress={handlePress}>
            {
              // @ts-ignore
              pickIcon(route, iconColor)
            }
            {route.name !== 'Scan' ? (
              <PlantText style={[styles.label, {color: labelColor}]}>
                {route.name}
              </PlantText>
            ) : null}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: heightPixel(55),
    flexDirection: 'row',
    backgroundColor: COLORS.BG_WHITE,
    shadowColor: COLORS.BLACK,
    shadowOffset: {width: 0, height: -5},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 6,
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: heightPixel(10),
    marginTop: heightPixel(5),
  },
});

export default BottomTabBar;
