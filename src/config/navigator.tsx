import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Routes} from '../modules/main/config';

const Navigator = () => {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
};

export default Navigator;
