import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import * as Screens from '../screens';

const Stack = createStackNavigator();

enum RouteName {
  CREATE_TASK = 'Create Task Screen',
}

const Routes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={RouteName.CREATE_TASK}
        component={Screens.CreateTaskScreen}
      />
    </Stack.Navigator>
  );
};

export default Routes;
