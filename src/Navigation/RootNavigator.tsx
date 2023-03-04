import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Onboard, Paywall} from '../Screens';
import HomeNavigator from './HomeStackNavigator';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

type RootStackParamList = {
  Onboard: undefined;
  Paywall: undefined;
  Home: undefined;
};

const MainStack = createStackNavigator<RootStackParamList>();

const RootNavigator = () => (
  <MainStack.Navigator screenOptions={{headerShown: false}}>
    <MainStack.Screen name="Onboard" component={Onboard} />
    <MainStack.Screen name="Paywall" component={Paywall} />
    <MainStack.Screen name="Home" component={HomeNavigator} />
  </MainStack.Navigator>
);

export default RootNavigator;
