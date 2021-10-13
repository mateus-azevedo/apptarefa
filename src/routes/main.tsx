import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import * as Features from '../features';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator initialRouteName="Home Feature" headerMode="none">
      <Stack.Screen
        name="Welcome Feature"
        component={Features.WelcomeFeature.Config.Routes}
      />
      <Stack.Screen
        name="Home Feature"
        component={Features.HomeFeature.Config.Routes}
      />
    </Stack.Navigator>
  );
};

export default Routes;
