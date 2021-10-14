import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import * as Features from '../features';
import TabRoutes from './principalBottomTab';

const Stack = createStackNavigator();

enum RouteName {
  WELCOME = 'Welcome Feature',
  HOME = 'Home Feature',
}

// TODO NAVEGAÇÃO POR TERNÁRIO INICIANDO WELCOME -> AUTH(FUTURAMENTE) -> HOME
// modelo {hasViewed ? (hasViewedThis ? (<C1 />) : (<C2/>)) : (<C3 />)}
const Routes = () => {
  return (
    <Stack.Navigator initialRouteName={RouteName.HOME} headerMode="none">
      <Stack.Screen
        name={RouteName.WELCOME}
        component={Features.WelcomeFeature.Config.Routes}
      />
      <Stack.Screen name={RouteName.HOME} component={TabRoutes} />
    </Stack.Navigator>
  );
};

export default Routes;
