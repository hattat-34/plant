import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {PlantButton, PlantText} from '../../Components';
import {Containers, Texts} from '../../Styles';
import {widthPixel} from '../../Utils/Scale';

interface OnboardOneProps {
  onNext: () => void;
}

const OnboardOne = ({onNext}: OnboardOneProps) => {
  return (
    <View style={Containers.rootContainer}>
      <PlantText style={Texts.title}>
        Take a photo to{' '}
        <PlantText style={Texts.titleExtraBold}>identify</PlantText> the plant!
      </PlantText>
      <Image
        style={styles.imgBrush}
        source={require('../../Assets/Image/Brush.png')}
      />
      <Image
        style={styles.imgContent}
        source={require('../../Assets/Image/Onboard-2.png')}
      />
      <PlantButton title="Continue" onPress={onNext} />
    </View>
  );
};

export default OnboardOne;

const styles = StyleSheet.create({
  imgBrush: {
    position: 'absolute',
    right: widthPixel(24),
    top: widthPixel(55),
    width: widthPixel(138),
  },
  imgContent: {
    width: widthPixel(325),
  },
});
