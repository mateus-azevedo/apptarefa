import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Tabs} from './routes';
// import {Routes} from '../modules/main/config';

const Navigator = () => {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
};

export default Navigator;
