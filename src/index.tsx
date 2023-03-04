import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './Navigation/RootNavigator';
import Theme from './Styles/Theme';

const PlantApp = () => {
  return (
    <NavigationContainer theme={Theme.Light}>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default PlantApp;
