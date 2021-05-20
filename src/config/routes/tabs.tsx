import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as Modules from '../../modules';

const Tab = createBottomTabNavigator();

const Routes = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={Modules.MainModule.Features.HomeFeature.Config.Routes}
      />
    </Tab.Navigator>
  );
};

export default Routes;
