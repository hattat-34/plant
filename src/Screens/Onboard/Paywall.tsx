import Scanner from '../../Assets/Svg/scanner.svg';
import Speedometer from '../../Assets/Svg/speedometer.svg';
import Close from '../../Assets/Svg/close.svg';

import React, {useState} from 'react';
import {
  FlatList,
  ImageBackground,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import {
  PaywallCard,
  PlantButton,
  PlantText,
  PremiumOption,
  SafeView,
} from '../../Components';
import {COLORS, Containers, Texts} from '../../Styles';
import {fontPixel, heightPixel, widthPixel} from '../../Utils/Scale';
import {SvgProps} from 'react-native-svg';
import {useNavigation} from '@react-navigation/native';

type PremiumOptions = 'monthly' | 'annual';

const Paywall = () => {
  const [premium, setPremium] = useState<PremiumOptions>();
  const navigation = useNavigation();

  const renderCard = ({item}: {item: PaywallCardData}) => (
    <PaywallCard
      style={styles.paywallCard}
      icon={item.icon}
      title={item.title}
      label={item.label}
    />
  );

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={require('../../Assets/Image/Paywall-bg.png')}
      />
      <SafeView>
        <View style={Containers.rootContainer}>
          <TouchableOpacity
            style={styles.closeBtn}
            onPress={() =>
              navigation.reset({
                routes: [{name: 'Home'}],
              })
            }>
            <Close width={widthPixel(24)} height={heightPixel(24)} />
          </TouchableOpacity>
          <PlantText style={[Texts.titleBold, styles.title]}>
            PlantApp <PlantText style={styles.thinTitle}>Premium</PlantText>
          </PlantText>
          <PlantText style={styles.subTitle}>Access All Features</PlantText>
          <FlatList
            style={styles.paywallCardList}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            bounces={false}
            keyExtractor={item => item.id}
            data={paywallCardData}
            renderItem={renderCard}
          />
          <PremiumOption
            selected={premium == 'monthly'}
            onSelected={() => setPremium('monthly')}
            style={styles.premiumOption}
            title="1 Month"
            description="$2.99/month, auto renewable"
          />
          <PremiumOption
            selected={premium == 'annual'}
            onSelected={() => setPremium('annual')}
            style={styles.premiumOption}
            title="1 Year"
            description="First 3 days free, then $529,99/year"
            discount={50}
          />
          <PlantButton style={styles.tryBtn} title="Try free for 3 days" />
          <PlantText style={styles.premiumInfoLabel}>
            After the 3-day free trial period you’ll be charged ₺274.99 per year
            unless you cancel before the trial expires. Yearly Subscription is
            Auto-Renewable
          </PlantText>
          <PlantText style={styles.termsLabel}>
            Terms • Privacy • Restore
          </PlantText>
        </View>
      </SafeView>
    </View>
  );
};

export default Paywall;

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    width: widthPixel(378),
    height: heightPixel(571),
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(16, 30, 23, 1)',
  },
  title: {
    marginTop: heightPixel(184),
    marginBottom: heightPixel(5),
    color: COLORS.WHITE,
  },
  thinTitle: {
    fontSize: fontPixel(27),
    color: COLORS.WHITE,
    fontWeight: '300',
  },
  subTitle: {
    fontSize: fontPixel(17),
    fontWeight: '300',
    color: COLORS.PLACEHOLDER_GRAY,
  },
  paywallCardList: {
    flexGrow: 0,
    marginVertical: heightPixel(24),
  },
  paywallCard: {
    marginRight: widthPixel(5),
  },
  premiumOption: {
    marginBottom: heightPixel(16),
  },
  tryBtn: {
    marginTop: heightPixel(10),
  },
  premiumInfoLabel: {
    fontSize: fontPixel(9),
    fontWeight: '300',
    color: 'rgba(255, 255, 255, 0.52)',
    textAlign: 'center',
    marginVertical: heightPixel(5),
  },
  termsLabel: {
    fontSize: fontPixel(11),
    fontWeight: '400',
    color: 'rgba(255, 255, 255, 0.52)',
    textAlign: 'center',
  },
  closeBtn: {
    position: 'absolute',
    right: widthPixel(12),
    padding: 4,
  },
});

interface PaywallCardData {
  id: string;
  icon: React.FC<SvgProps>;
  title: string;
  label: string;
}

const paywallCardData = [
  {
    id: '1',
    icon: Scanner,
    title: 'Unlimited',
    label: 'Plant Identify',
  },
  {
    id: '2',
    icon: Speedometer,
    title: 'Faster',
    label: 'Process',
  },
  {
    id: '3',
    icon: Speedometer,
    title: 'Detailed',
    label: 'Plant care',
  },
];
