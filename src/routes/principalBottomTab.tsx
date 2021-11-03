import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import * as Features from '../features';

const Tab = createBottomTabNavigator();

enum RouteName {
  HOME = 'Home Feature',
  NEW_TASK = 'Add Task Feature',
}

const Routes = () => {
  return (
    <Tab.Navigator
      initialRouteName={RouteName.HOME}
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarStyle: [
          {
            display: 'flex',
          },
          null,
        ],
      }}>
      <Tab.Screen
        name={RouteName.HOME}
        component={Features.HomeFeature.Screens.HomeScreen}
      />
      <Tab.Screen
        name={RouteName.NEW_TASK}
        component={Features.AddTaskFeature.Screens.CreateTaskScreen}
      />
    </Tab.Navigator>
  );
};

export default Routes;
