import React from 'react';
import {Text} from 'react-native';

import {Centralize, ExampleImage} from '../components';

interface ITaskTip {
  pagination: (value: boolean) => void;
}

const TaskTip = ({pagination}: ITaskTip) => {
  // pagination = () => {
  //   pagination(true);
  // };

  return (
    <Centralize>
      <Text>Crie Tarefas</Text>
      <ExampleImage heightProp={300} widthProp={300} />
      <Text>É rápido e prático</Text>
    </Centralize>
  );
};

export default TaskTip;
