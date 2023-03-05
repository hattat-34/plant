import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeNavigator from './HomeStackNavigator';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends TabParamList {}
  }
}

export type TabParamList = {
  Tab_Home: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Tab.Screen name="Tab_Home" component={HomeNavigator} />
  </Tab.Navigator>
);

export default TabNavigator;
