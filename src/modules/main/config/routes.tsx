import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import * as Features from '../features';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Features.HomeFeature.Config.Routes}
      />
    </Stack.Navigator>
  );
};

export default Routes;
