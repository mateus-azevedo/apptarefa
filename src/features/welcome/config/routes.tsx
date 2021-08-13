import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import * as Screen from '../screens';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator initialRouteName="TaskTip">
      <Stack.Screen name="Introduction" component={Screen.Introduction} />
      <Stack.Screen name="TaskTip" component={Screen.TaskTip} />
      <Stack.Screen name="ToHomeScreen" component={Screen.ToHomeScreen} />
    </Stack.Navigator>
  );
};

export default Routes;
