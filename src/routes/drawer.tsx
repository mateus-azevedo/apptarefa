import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import * as Module from '../';

const Drawer = createDrawerNavigator();

const Routes = () => {
  return (
    <Drawer.Navigator initialRouteName="Notification">
      <Drawer.Screen
        name="Home"
        component={Module.Features.HomeFeature.Config.Routes}
      />
    </Drawer.Navigator>
  );
};

export default Routes;
