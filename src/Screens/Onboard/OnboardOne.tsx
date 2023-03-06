import React from 'react';
import {Image, ImageBackground, StyleSheet, View} from 'react-native';
import {PlantButton, PlantText} from '../../Components';
import {Containers, Texts} from '../../Styles';
import {heightPixel, widthPixel} from '../../Utils/Scale';

interface OnboardOneProps {
  onNext: () => void;
}

const OnboardOne = ({onNext}: OnboardOneProps) => {
  return (
    <View style={Containers.rootContainer}>
      <ImageBackground
        imageStyle={styles.imgBrush}
        source={require('../../Assets/Image/Brush.png')}
        resizeMode="stretch">
        <PlantText style={Texts.title}>
          Take a photo to{' '}
          <PlantText style={Texts.titleExtraBold}>identify</PlantText> the
          plant!
        </PlantText>
      </ImageBackground>
      <Image
        style={styles.imgContent}
        source={require('../../Assets/Image/Onboard-2.png')}
        resizeMode="contain"
      />

      <PlantButton style={styles.btn} title="Continue" onPress={onNext} />
    </View>
  );
};

export default OnboardOne;

const styles = StyleSheet.create({
  imgBrush: {
    width: widthPixel(138),
    height: heightPixel(12),
    marginLeft: widthPixel(185),
    marginTop: widthPixel(30),
  },
  imgContent: {
    width: widthPixel(325),
    height: heightPixel(523),
  },
  btn: {
    position: 'absolute',
    bottom: heightPixel(33),
    width: '100%',
    left: widthPixel(20),
  },
});
