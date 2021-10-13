import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import * as Screens from '../screens';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator initialRouteName="PresentationSwiper">
      <Stack.Screen
        name="PresentationSwiper"
        component={Screens.PresentationSwiper}
      />
    </Stack.Navigator>
  );
};

export default Routes;
