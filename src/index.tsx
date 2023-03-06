import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './Navigation/RootNavigator';
import Theme from './Styles/Theme';
import {Provider} from 'react-redux';
import store, {persistedStore} from './Store';
import {PersistGate} from 'redux-persist/integration/react';

const PlantApp = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistedStore}>
        <NavigationContainer theme={Theme.Light}>
          <RootNavigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default PlantApp;
