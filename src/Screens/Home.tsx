import React from 'react';
import {
  FlatList,
  ImageBackground,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {
  PlantCard,
  PlantText,
  PremiumButton,
  QuestionCard,
  SafeView,
  Search,
} from '../Components';
import {Containers} from '../Styles';
import {fontPixel, heightPixel, widthPixel} from '../Utils/Scale';

const Home = () => {
  const renderQuestions = ({item}: {item: (typeof data)[0]}) => (
    <QuestionCard
      style={styles.questionCard}
      title={item.title}
      uri={item.uri}
      imgUri={item.image_uri}
    />
  );

  const renderPlants = ({item}: {item: (typeof data2)[0]}) => (
    <PlantCard
      style={styles.plantCard}
      title={item.title}
      uri={item.image.url}
    />
  );

  return (
    <SafeView>
      <View style={Containers.rootContainer}>
        <PlantText style={styles.subTitle}>Hi, plant lover!</PlantText>
        <PlantText style={styles.title}>Good Afternoon! ⛅</PlantText>
        <ImageBackground
          style={styles.searchBg}
          imageStyle={styles.searchBgImg}
          source={require('../Assets/Image/Search-bg.png')}
          resizeMode="cover">
          <Search
            style={styles.search}
            placeHolder="Search for plants"
            onChange={() => null}
          />
        </ImageBackground>
        <PremiumButton wrapperStyle={styles.preBtn} />
        <PlantText style={styles.label}>Get Started</PlantText>
        <FlatList
          style={styles.questionList}
          horizontal
          bounces={false}
          initialNumToRender={2}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
          data={data}
          renderItem={renderQuestions}
        />
        <FlatList
          style={styles.plantList}
          horizontal={false}
          numColumns={2}
          initialNumToRender={4}
          bounces={false}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
          data={data2}
          renderItem={renderPlants}
        />
      </View>
    </SafeView>
  );
};

export default Home;

const styles = StyleSheet.create({
  title: {
    fontSize: widthPixel(24),
    fontWeight: '500',
  },
  subTitle: {
    fontSize: widthPixel(16),
    marginBottom: heightPixel(6),
  },
  searchBg: {
    height: heightPixel(60),
    paddingHorizontal: widthPixel(24),
    marginHorizontal: -widthPixel(24),
  },
  searchBgImg: {
    top: heightPixel(10),
  },
  search: {
    marginVertical: heightPixel(14),
  },
  preBtn: {
    marginVertical: heightPixel(24),
  },
  label: {
    fontSize: fontPixel(15),
    fontWeight: '500',
    marginBottom: heightPixel(16),
  },
  questionList: {
    flexGrow: 0,
    marginRight: -widthPixel(24),
    marginBottom: heightPixel(24),
  },
  questionCard: {
    marginRight: widthPixel(10),
  },
  plantList: {
    flex: 1,
    marginBottom: -heightPixel(65),
  },
  plantCard: {
    marginRight: widthPixel(11),
    marginBottom: widthPixel(16),
  },
});

const data = [
  {
    id: 1,
    title: 'How to identify plants?',
    subtitle: 'Life Style',
    image_uri:
      'https://firebasestorage.googleapis.com/v0/b/flora---plant-identifier.appspot.com/o/public%2FCard.png?alt=media',
    uri: 'https://plantapp.app/blog/identifying-plant-in-10-steps/',
    order: 1,
  },
  {
    id: 2,
    title: 'Differences Between Species and Varieties?',
    subtitle: 'Plant Identify',
    image_uri:
      'https://firebasestorage.googleapis.com/v0/b/flora---plant-identifier.appspot.com/o/public%2Fcard2.png?alt=media',
    uri: 'https://plantapp.app/blog/differences-between-species-and-varieties/',
    order: 2,
  },
  {
    id: 3,
    title: 'The reasons why the same plant can look different?',
    subtitle: 'Life Style',
    image_uri:
      'https://firebasestorage.googleapis.com/v0/b/flora---plant-identifier.appspot.com/o/public%2FCard3.png?alt=media',
    uri: 'https://plantapp.app/blog/same-seeds-but-different-looking-plants/',
    order: 3,
  },
];

const data2 = [
  {
    id: 11,
    name: 'fern',
    createdAt: '2023-01-11T10:53:05.801Z',
    updatedAt: '2023-01-11T10:54:30.059Z',
    publishedAt: '2023-01-11T10:53:07.416Z',
    title: 'Ferns',
    rank: 0,
    image: {
      id: 23,
      name: '6.png',
      alternativeText: null,
      caption: null,
      width: 116,
      height: 126,
      formats: null,
      hash: '6_edbcc6988a',
      ext: '.png',
      mime: 'image/png',
      size: 8.24,
      url: 'https://cms-cdn.plantapp.app/6_edbcc6988a/6_edbcc6988a.png',
      previewUrl: null,
      provider: '@strapi-community/strapi-provider-upload-google-cloud-storage',
      provider_metadata: null,
      createdAt: '2023-01-11T10:44:46.151Z',
      updatedAt: '2023-01-11T10:44:46.151Z',
    },
  },
  {
    id: 10,
    name: 'cacti-and-succulent',
    createdAt: '2023-01-11T10:52:28.521Z',
    updatedAt: '2023-01-11T10:54:39.391Z',
    publishedAt: '2023-01-11T10:52:36.428Z',
    title: 'Cacti and Succulents',
    rank: 1,
    image: {
      id: 25,
      name: '5.png',
      alternativeText: null,
      caption: null,
      width: 158,
      height: 152,
      formats: null,
      hash: '5_d2384a3938',
      ext: '.png',
      mime: 'image/png',
      size: 10.01,
      url: 'https://cms-cdn.plantapp.app/5_d2384a3938/5_d2384a3938.png',
      previewUrl: null,
      provider: '@strapi-community/strapi-provider-upload-google-cloud-storage',
      provider_metadata: null,
      createdAt: '2023-01-11T10:50:17.828Z',
      updatedAt: '2023-01-11T10:51:05.935Z',
    },
  },
  {
    id: 4,
    name: 'flowering',
    createdAt: '2023-01-11T10:44:18.862Z',
    updatedAt: '2023-01-11T10:54:54.326Z',
    publishedAt: '2023-01-11T10:44:20.185Z',
    title: 'Flowering Plants',
    rank: 2,
    image: {
      id: 22,
      name: '2.png',
      alternativeText: null,
      caption: null,
      width: 116,
      height: 126,
      formats: null,
      hash: '2_4a226c9ae7',
      ext: '.png',
      mime: 'image/png',
      size: 5.28,
      url: 'https://cms-cdn.plantapp.app/2_4a226c9ae7/2_4a226c9ae7.png',
      previewUrl: null,
      provider: '@strapi-community/strapi-provider-upload-google-cloud-storage',
      provider_metadata: null,
      createdAt: '2023-01-11T10:44:13.779Z',
      updatedAt: '2023-01-11T10:44:13.779Z',
    },
  },
  {
    id: 7,
    name: 'vegetable-and-fruit',
    createdAt: '2023-01-11T10:50:21.177Z',
    updatedAt: '2023-01-11T10:55:06.266Z',
    publishedAt: '2023-01-11T10:50:22.557Z',
    title: 'Vegetables and Fruits',
    rank: 3,
    image: {
      id: 25,
      name: '5.png',
      alternativeText: null,
      caption: null,
      width: 158,
      height: 152,
      formats: null,
      hash: '5_d2384a3938',
      ext: '.png',
      mime: 'image/png',
      size: 10.01,
      url: 'https://cms-cdn.plantapp.app/5_d2384a3938/5_d2384a3938.png',
      previewUrl: null,
      provider: '@strapi-community/strapi-provider-upload-google-cloud-storage',
      provider_metadata: null,
      createdAt: '2023-01-11T10:50:17.828Z',
      updatedAt: '2023-01-11T10:51:05.935Z',
    },
  },
  {
    id: 8,
    name: 'herb',
    createdAt: '2023-01-11T10:51:13.403Z',
    updatedAt: '2023-01-11T10:55:15.464Z',
    publishedAt: '2023-01-11T10:51:22.859Z',
    title: 'Herbs',
    rank: 4,
    image: {
      id: 25,
      name: '5.png',
      alternativeText: null,
      caption: null,
      width: 158,
      height: 152,
      formats: null,
      hash: '5_d2384a3938',
      ext: '.png',
      mime: 'image/png',
      size: 10.01,
      url: 'https://cms-cdn.plantapp.app/5_d2384a3938/5_d2384a3938.png',
      previewUrl: null,
      provider: '@strapi-community/strapi-provider-upload-google-cloud-storage',
      provider_metadata: null,
      createdAt: '2023-01-11T10:50:17.828Z',
      updatedAt: '2023-01-11T10:51:05.935Z',
    },
  },
  {
    id: 5,
    name: 'tree',
    createdAt: '2023-01-11T10:45:03.763Z',
    updatedAt: '2023-01-11T10:55:46.564Z',
    publishedAt: '2023-01-11T10:46:10.195Z',
    title: 'Trees',
    rank: 5,
    image: {
      id: 23,
      name: '6.png',
      alternativeText: null,
      caption: null,
      width: 116,
      height: 126,
      formats: null,
      hash: '6_edbcc6988a',
      ext: '.png',
      mime: 'image/png',
      size: 8.24,
      url: 'https://cms-cdn.plantapp.app/6_edbcc6988a/6_edbcc6988a.png',
      previewUrl: null,
      provider: '@strapi-community/strapi-provider-upload-google-cloud-storage',
      provider_metadata: null,
      createdAt: '2023-01-11T10:44:46.151Z',
      updatedAt: '2023-01-11T10:44:46.151Z',
    },
  },
  {
    id: 6,
    name: 'shrub',
    createdAt: '2023-01-11T10:45:51.259Z',
    updatedAt: '2023-01-11T10:56:07.609Z',
    publishedAt: '2023-01-11T10:50:41.670Z',
    title: 'Shrubs',
    rank: 6,
    image: {
      id: 24,
      name: '4.png',
      alternativeText: null,
      caption: null,
      width: 116,
      height: 126,
      formats: null,
      hash: '4_31ed0235a1',
      ext: '.png',
      mime: 'image/png',
      size: 7.96,
      url: 'https://cms-cdn.plantapp.app/4_31ed0235a1/4_31ed0235a1.png',
      previewUrl: null,
      provider: '@strapi-community/strapi-provider-upload-google-cloud-storage',
      provider_metadata: null,
      createdAt: '2023-01-11T10:45:32.337Z',
      updatedAt: '2023-01-11T10:45:32.337Z',
    },
  },
  {
    id: 9,
    name: 'groundcover',
    createdAt: '2023-01-11T10:51:42.646Z',
    updatedAt: '2023-01-11T11:05:56.404Z',
    publishedAt: '2023-01-11T10:51:43.919Z',
    title: 'Groundcover',
    rank: 7,
    image: {
      id: 22,
      name: '2.png',
      alternativeText: null,
      caption: null,
      width: 116,
      height: 126,
      formats: null,
      hash: '2_4a226c9ae7',
      ext: '.png',
      mime: 'image/png',
      size: 5.28,
      url: 'https://cms-cdn.plantapp.app/2_4a226c9ae7/2_4a226c9ae7.png',
      previewUrl: null,
      provider: '@strapi-community/strapi-provider-upload-google-cloud-storage',
      provider_metadata: null,
      createdAt: '2023-01-11T10:44:13.779Z',
      updatedAt: '2023-01-11T10:44:13.779Z',
    },
  },
  {
    id: 12,
    name: 'edible',
    createdAt: '2023-01-11T11:04:05.527Z',
    updatedAt: '2023-01-11T11:05:56.542Z',
    publishedAt: '2023-01-11T11:04:06.784Z',
    title: 'Edible Plants',
    rank: 8,
    image: {
      id: 25,
      name: '5.png',
      alternativeText: null,
      caption: null,
      width: 158,
      height: 152,
      formats: null,
      hash: '5_d2384a3938',
      ext: '.png',
      mime: 'image/png',
      size: 10.01,
      url: 'https://cms-cdn.plantapp.app/5_d2384a3938/5_d2384a3938.png',
      previewUrl: null,
      provider: '@strapi-community/strapi-provider-upload-google-cloud-storage',
      provider_metadata: null,
      createdAt: '2023-01-11T10:50:17.828Z',
      updatedAt: '2023-01-11T10:51:05.935Z',
    },
  },
];
