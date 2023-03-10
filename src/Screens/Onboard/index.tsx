import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import {Image, ImageBackground, StyleSheet, View} from 'react-native';
import {PlantButton, PlantText, SafeView} from '../../Components';
import {COLORS, Containers, Texts} from '../../Styles';
import {fontPixel, heightPixel, widthPixel} from '../../Utils/Scale';
import Orientation from 'react-native-orientation-locker';

const GettingStarted = () => {
  const navigation = useNavigation();

  useEffect(() => {
    Orientation.lockToPortrait();
  }, []);

  return (
    <ImageBackground
      style={StyleSheet.absoluteFillObject}
      source={require('../../Assets/Image/Onboard-bg-blue.png')}>
      <SafeView>
        <View style={Containers.rootContainer}>
          <PlantText style={Texts.title}>
            Welcome to <PlantText style={Texts.titleBold}>PlantApp</PlantText>
          </PlantText>
          <PlantText style={styles.subTitle}>
            Identify more than 3000+ plants and 88% accuracy.
          </PlantText>
          <Image
            source={require('../../Assets/Image/Onboard-1.png')}
            style={styles.imgContent}
            resizeMode="contain"
          />
          <PlantButton
            title="Get Started"
            onPress={() => navigation.navigate('Onboard')}
          />
          <PlantText style={styles.termsLabel}>
            By tapping next, you are agreeing to PlantID Terms of Use & Privacy
            Policy.
          </PlantText>
        </View>
      </SafeView>
    </ImageBackground>
  );
};

export default GettingStarted;

const styles = StyleSheet.create({
  subTitle: {
    fontSize: fontPixel(16),
    color: COLORS.GRAY,
    width: widthPixel(300),
  },
  termsLabel: {
    width: widthPixel(240),
    alignSelf: 'center',
    marginVertical: heightPixel(17),
    fontSize: fontPixel(11),
    color: COLORS.LIGHT_GRAY,
    textAlign: 'center',
  },
  imgContent: {
    width: widthPixel(323),
    height: heightPixel(499),
    marginTop: heightPixel(12),
  },
});
