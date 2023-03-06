import React, {useEffect} from 'react';
import {FlatList, ImageBackground, StyleSheet, View} from 'react-native';
import Orientation from 'react-native-orientation-locker';
import {
  PlantCard,
  PlantText,
  PremiumButton,
  QuestionCard,
  SafeView,
  Search,
} from '../Components';
import {getCategories} from '../Services/Public/CategoryService';
import {getQuestions} from '../Services/Public/QuestionService';
import {PlantQuestion} from '../Store/Entities/PlantQuestions';
import {PlantSpecies} from '../Store/Entities/PlantSpecies';
import {Containers} from '../Styles';
import {useAppDispatch, useAppSelector} from '../Utils/Hooks';
import {fontPixel, heightPixel, widthPixel} from '../Utils/Scale';

const Home = () => {
  const questions = useAppSelector(state => state.plantQuestions);
  const species = useAppSelector(state => state.plantSpecies);
  const dispatch = useAppDispatch();

  useEffect(() => {
    Orientation.unlockAllOrientations();
    dispatch(getQuestions());
    dispatch(getCategories());
  }, []);

  const renderQuestions = ({item}: {item: PlantQuestion}) => (
    <QuestionCard
      style={styles.questionCard}
      title={item.title}
      uri={item.uri}
      imgUri={item.imageUri}
    />
  );

  const renderPlants = ({item}: {item: PlantSpecies}) => (
    <PlantCard
      style={styles.plantCard}
      title={item.title}
      uri={item.imageUrl}
    />
  );

  const renderListHeader = (
    <>
      <PremiumButton wrapperStyle={styles.preBtn} />
      <PlantText style={styles.label}>Get Started</PlantText>
      <FlatList
        style={styles.questionList}
        horizontal
        bounces={false}
        initialNumToRender={2}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        data={questions.list}
        renderItem={renderQuestions}
      />
    </>
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
        <FlatList
          style={styles.plantList}
          horizontal={false}
          numColumns={2}
          initialNumToRender={4}
          bounces={false}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
          data={species.list}
          renderItem={renderPlants}
          ListHeaderComponent={renderListHeader}
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
    zIndex: 1,
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
