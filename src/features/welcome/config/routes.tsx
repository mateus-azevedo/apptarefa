import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import * as Screen from '../screens';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator initialRouteName="PresentationSwiper">
      <Stack.Screen
        name="PresentationSwiper"
        component={Screen.PresentationSwiper}
      />
    </Stack.Navigator>
  );
};

export default Routes;
