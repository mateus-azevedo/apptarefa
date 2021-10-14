import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import * as Features from '../features';

const Stack = createStackNavigator();

enum RouteName {
  WELCOME = 'Welcome Feature',
  HOME = 'Home Feature',
}

const Routes = () => {
  return (
    <Stack.Navigator initialRouteName={RouteName.HOME} headerMode="none">
      <Stack.Screen
        name={RouteName.WELCOME}
        component={Features.WelcomeFeature.Config.Routes}
      />
      <Stack.Screen
        name={RouteName.HOME}
        component={Features.HomeFeature.Config.Routes}
      />
    </Stack.Navigator>
  );
};

export default Routes;
