import {useNavigation} from '@react-navigation/native';
import React, {createRef, useRef} from 'react';
import {
  StyleSheet,
  ImageBackground,
  ScrollView,
  Animated,
  useWindowDimensions,
} from 'react-native';
import {SafeView} from '../../Components';
import Paginator from '../../Components/Paginator';
import OnboardOne from './OnboardOne';
import OnboardTwo from './OnboardTwo';

const Onboard = () => {
  const scrollRef = createRef<ScrollView>();
  const scrollX = useRef(new Animated.Value(0)).current;
  const dimensions = useWindowDimensions();
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={StyleSheet.absoluteFillObject}
      source={require('../../Assets/Image/Onboard-bg-blue.png')}>
      <SafeView>
        <ScrollView
          ref={scrollRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {
              useNativeDriver: false,
            },
          )}
          bounces={false}
          scrollEventThrottle={32}>
          <OnboardOne
            onNext={() =>
              scrollRef.current?.scrollTo({x: dimensions.width, animated: true})
            }
          />
          <OnboardTwo onNext={() => navigation.navigate('Paywall')} />
        </ScrollView>
        <Paginator pageCount={2} scrollX={scrollX} />
      </SafeView>
    </ImageBackground>
  );
};

export default Onboard;
