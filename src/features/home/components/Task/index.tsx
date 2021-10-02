import React from 'react';
import {Container, ItemLeft, Square, ItemText, Circular} from './style';

interface ITaskProps {
  text: string;
}

const Task = ({text}: ITaskProps) => {
  return (
    <Container>
      <ItemLeft>
        <Square />
        <ItemText>{text}</ItemText>
      </ItemLeft>

      <Circular />
    </Container>
  );
};

export default Task;
