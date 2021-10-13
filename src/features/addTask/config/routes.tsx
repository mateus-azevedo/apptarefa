import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import * as Screens from '../screens';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Create Task Screen"
        component={Screens.CreateTaskScreen}
      />
    </Stack.Navigator>
  );
};

export default Routes;
