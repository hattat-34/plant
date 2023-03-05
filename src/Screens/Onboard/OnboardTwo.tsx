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
      <PlantText style={Texts.title}>
        Get plant{' '}
        <PlantText style={Texts.titleExtraBold}>care guides</PlantText>
      </PlantText>
      <ImageBackground
        style={styles.imgLeaf}
        source={require('../../Assets/Image/Leaf.png')}
      />
      <Image
        style={styles.imgBrush}
        source={require('../../Assets/Image/Brush.png')}
      />
      <Image
        style={styles.imgContent}
        source={require('../../Assets/Image/Onboard-3.png')}
      />
      <PlantButton title="Continue" style={styles.nextBtn} onPress={onNext} />
    </View>
  );
};

export default OnboardTwo;

const styles = StyleSheet.create({
  imgBrush: {
    position: 'absolute',
    right: widthPixel(55),
    top: widthPixel(60),
    width: widthPixel(152),
  },
  imgLeaf: {
    position: 'absolute',
    left: widthPixel(30),
    top: heightPixel(60),
    width: widthPixel(325),
    height: heightPixel(411),
  },
  imgContent: {
    height: heightPixel(590),
    width: widthPixel(290),
    marginLeft: widthPixel(22),
    marginTop: heightPixel(20),
  },
  nextBtn: {
    position: 'absolute',
    top: heightPixel(635),
    width: '100%',
    left: widthPixel(20),
  },
});
