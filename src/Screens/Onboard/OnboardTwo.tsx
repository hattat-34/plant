import React from 'react';
import {Image, ImageBackground, StyleSheet, View} from 'react-native';
import {PlantButton, PlantText} from '../../Components';
import {Containers, Texts} from '../../Styles';
import {heightPixel, widthPixel} from '../../Utils/Scale';

interface OnboardTwoProps {
  onNext: () => void;
}

const OnboardTwo = ({onNext}: OnboardTwoProps) => {
  return (
    <View style={Containers.rootContainer}>
      <ImageBackground
        style={{marginBottom: heightPixel(25)}}
        imageStyle={styles.imgBrush}
        source={require('../../Assets/Image/Brush.png')}>
        <PlantText style={Texts.title}>
          Get plant{' '}
          <PlantText style={Texts.titleExtraBold}>care guides</PlantText>
        </PlantText>
      </ImageBackground>

      <ImageBackground
        imageStyle={styles.imgLeaf}
        style={styles.imgLeafContainer}
        source={require('../../Assets/Image/Leaf.png')}>
        <Image
          style={styles.imgPhone}
          source={require('../../Assets/Image/Onboard-3.png')}
          resizeMode="contain"
        />
      </ImageBackground>

      <PlantButton title="Continue" style={styles.nextBtn} onPress={onNext} />
    </View>
  );
};

export default OnboardTwo;

const styles = StyleSheet.create({
  imgBrush: {
    width: widthPixel(152),
    height: heightPixel(13),
    marginLeft: widthPixel(130),
    marginTop: widthPixel(35),
  },
  imgPhone: {
    width: widthPixel(325),
    height: heightPixel(523),
  },
  imgLeafContainer: {
    marginHorizontal: -widthPixel(24),
  },
  imgLeaf: {resizeMode: 'contain'},
  nextBtn: {
    position: 'absolute',
    bottom: heightPixel(33),
    width: '100%',
    left: widthPixel(20),
  },
});
