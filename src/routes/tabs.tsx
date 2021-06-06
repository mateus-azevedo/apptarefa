import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DrawerRoutes from './drawer';
import * as Module from '../';

const Tab = createBottomTabNavigator();

const Routes = () => {
  return (
    <Tab.Navigator initialRouteName="Main">
      <Tab.Screen name="Main" component={DrawerRoutes} />
    </Tab.Navigator>
  );
};

export default Routes;
