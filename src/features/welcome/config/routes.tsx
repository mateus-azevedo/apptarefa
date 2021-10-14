import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import * as Screens from '../screens';

const Stack = createStackNavigator();

enum RouteName {
  SWIPER = 'Presentation Swiper',
}

const Routes = () => {
  return (
    <Stack.Navigator initialRouteName={RouteName.SWIPER}>
      <Stack.Screen
        name={RouteName.SWIPER}
        component={Screens.PresentationSwiper}
      />
    </Stack.Navigator>
  );
};

export default Routes;
