import React from 'react';
import {Text} from 'react-native';

import {Centralize, ExampleImage} from '../components';

const Introduction = () => {
  return (
    <Centralize>
      <Text>Bem-vindo ao aplicativo</Text>
      <ExampleImage heightProp={300} widthProp={300} />
    </Centralize>
  );
};

export default Introduction;
