import React, {useEffect, useRef} from 'react';
import {Animated, StyleProp, View, ViewStyle} from 'react-native';
import Svg, {Circle} from 'react-native-svg';
import {COLORS} from '../Styles';
import {heightPixel} from '../Utils/Scale';
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

interface RadioProps {
  selected: boolean;
  size: number;
  wrapperStyle?: StyleProp<ViewStyle>;
}

const Radio = ({selected, size = 16, wrapperStyle}: RadioProps) => {
  const strokeWidth = useRef(heightPixel(1.3)).current;
  const circleAnimationValue = useRef(new Animated.Value(0)).current;
  const innerCircleAnimationValue = useRef(new Animated.Value(0)).current;

  const outerCircleRadius = useRef((size - strokeWidth) / 2).current;

  const circleAnimation = Animated.spring(circleAnimationValue, {
    toValue: selected ? outerCircleRadius : 0,
    friction: 4,
    tension: 10,
    useNativeDriver: true,
  });

  const circleAnimationInner = Animated.spring(innerCircleAnimationValue, {
    toValue: selected ? outerCircleRadius / 3 : 0,
    friction: 4,
    tension: 10,
    useNativeDriver: true,
  });

  useEffect(() => {
    circleAnimation.start();
    circleAnimationInner.start();
  }, [selected]);

  return (
    <View style={wrapperStyle}>
      <Svg width={size} height={size} fill="none">
        <Circle
          r={outerCircleRadius}
          cx={size / 2}
          cy={size / 2}
          strokeWidth={strokeWidth}
          fill={'rgba(255, 255, 255, 0.15)'}
          stroke={selected ? COLORS.APP_GREEN : 'rgba(255, 255, 255, 0.15)'}
        />
        <AnimatedCircle
          r={circleAnimationValue}
          cx={size / 2}
          cy={size / 2}
          fill={COLORS.APP_GREEN}
        />
        <AnimatedCircle
          r={innerCircleAnimationValue}
          cx={size / 2}
          cy={size / 2}
          fill={COLORS.WHITE}
        />
      </Svg>
    </View>
  );
};

export default Radio;
