import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import * as Screen from '../screens';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="HomePanel" component={Screen.HomePanel} />
    </Stack.Navigator>
  );
};

export default Routes;
