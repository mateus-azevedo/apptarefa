import React from 'react';
import {Text, Button} from 'react-native';

import {Centralize, ExampleImage} from '../components';

const ToHomeScreen = props => {
  return (
    <Centralize>
      <ExampleImage heightProp={300} widthProp={300} />
      <Text>Pronto para começar?</Text>
      <Button title="Vamos Lá" onPress={props.onPress} />
    </Centralize>
  );
};

export default ToHomeScreen;
