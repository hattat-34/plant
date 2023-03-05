import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {GettingStarted, Onboard, Paywall} from '../Screens';
import TabNavigator from './TabNavigator';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

type RootStackParamList = {
  GettingStarted: undefined;
  Onboard: undefined;
  Paywall: undefined;
  Home: undefined;
};

const MainStack = createStackNavigator<RootStackParamList>();

const RootNavigator = () => (
  <MainStack.Navigator screenOptions={{headerShown: false}}>
    <MainStack.Screen name="GettingStarted" component={GettingStarted} />
    <MainStack.Screen name="Onboard" component={Onboard} />
    <MainStack.Screen
      name="Paywall"
      component={Paywall}
      options={{
        presentation: 'modal',
        gestureEnabled: false,
        cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
      }}
    />
    <MainStack.Screen name="Home" component={TabNavigator} />
  </MainStack.Navigator>
);

export default RootNavigator;
