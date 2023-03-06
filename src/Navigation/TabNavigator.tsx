import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeNavigator from './HomeStackNavigator';
import BottomTabBar from '../Components/BottomTabBar';
import {Diagnose, MyGarden, Profile, Scan} from '../Screens';
declare global {
  namespace ReactNavigation {
    interface RootParamList extends TabParamList {}
  }
}

export type TabParamList = {
  Home: undefined;
  Diagnose: undefined;
  Scan: undefined;
  MyGarden: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

const TabNavigator = () => (
  <Tab.Navigator tabBar={props => <BottomTabBar {...props} />}>
    <Tab.Screen
      name="Home"
      component={HomeNavigator}
      options={{headerShown: false}}
    />
    <Tab.Screen name="Diagnose" component={Diagnose} />
    <Tab.Screen name="Scan" component={Scan} />
    <Tab.Screen name="MyGarden" component={MyGarden} />
    <Tab.Screen name="Profile" component={Profile} />
  </Tab.Navigator>
);

export default TabNavigator;
