import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeNavigator from './HomeStackNavigator';
import {Diagnose, MyGarden, Profile, Scan} from '../Screens';
declare global {
  namespace ReactNavigation {
    interface RootParamList extends TabParamList {}
  }
}

export type TabParamList = {
  Tab_Home: undefined;
  Tab_Diagnose: undefined;
  Tab_Scan: undefined;
  Tab_MyGarden: undefined;
  Tab_Profile: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Tab_Home"
      component={HomeNavigator}
      options={{headerShown: false}}
    />
    <Tab.Screen name="Tab_Diagnose" component={Diagnose} />
    <Tab.Screen name="Tab_Scan" component={Scan} />
    <Tab.Screen name="Tab_MyGarden" component={MyGarden} />
    <Tab.Screen name="Tab_Profile" component={Profile} />
  </Tab.Navigator>
);

export default TabNavigator;
