import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import MainRoutes from '../routes/main';

const Navigator = () => {
  return (
    <NavigationContainer>
      <MainRoutes />
    </NavigationContainer>
  );
};

export default Navigator;
