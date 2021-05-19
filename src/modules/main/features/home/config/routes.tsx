import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import * as Screens from '../screens';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Initiate" component={Screens.InitiateScreen} />
    </Stack.Navigator>
  );
};

export default Routes;
