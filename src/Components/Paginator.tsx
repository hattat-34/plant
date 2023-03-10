import React from 'react';
import {
  StyleProp,
  StyleSheet,
  ViewStyle,
  Animated,
  useWindowDimensions,
  View,
} from 'react-native';
import {COLORS} from '../Styles';
import {widthPixel} from '../Utils/Scale';

interface Props {
  pageCount: number;
  scrollX: Animated.Value;
  style?: StyleProp<ViewStyle>;
  color?: string;
}

const Paginator = ({
  pageCount,
  scrollX,
  style,
  color = COLORS.BLACK,
}: Props) => {
  const {width} = useWindowDimensions();

  return (
    <View style={[styles.container, style]}>
      {Array(pageCount)
        .fill(undefined)
        .map((_, i) => {
          const dotWidth = scrollX.interpolate({
            inputRange: [(i - 1) * width, i * width, (i + 1) * width],
            outputRange: [widthPixel(10), widthPixel(20), widthPixel(10)],
            extrapolate: 'clamp',
          });

          const dotOpacity = scrollX.interpolate({
            inputRange: [(i - 1) * width, i * width, (i + 1) * width],
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              key={i.toString()}
              style={[
                styles.dot,
                {width: dotWidth, backgroundColor: color, opacity: dotOpacity},
              ]}
            />
          );
        })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: widthPixel(15),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    height: widthPixel(10),
    borderRadius: widthPixel(5),
    marginHorizontal: 8,
  },
});

export default Paginator;
