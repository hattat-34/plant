import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '../Screens';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends HomeStackParamList {}
  }
}

type HomeStackParamList = {
  Home: undefined;
};

const HomeStack = createStackNavigator<HomeStackParamList>();

const HomeNavigator = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      options={{headerShown: false}}
      name="Home"
      component={Home}
    />
  </HomeStack.Navigator>
);

export default HomeNavigator;
