import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './Navigation/RootNavigator';
import Theme from './Styles/Theme';
import {Provider} from 'react-redux';
import store from './Store';

const PlantApp = () => {
  return (
    <Provider store={store}>
      <NavigationContainer theme={Theme.Light}>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default PlantApp;
