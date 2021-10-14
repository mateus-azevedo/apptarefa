import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import * as Screens from '../screens';

const Stack = createStackNavigator();

enum RouteName {
  HOME = 'Home Screen',
}

const Routes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={RouteName.HOME} component={Screens.HomeScreen} />
    </Stack.Navigator>
  );
};

export default Routes;
