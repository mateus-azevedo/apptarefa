import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as Features from '../config';

const Tab = createBottomTabNavigator();

const Routes = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={Features.Routes} />
    </Tab.Navigator>
  );
};

export default Routes;
