import React from 'react';
import styled from 'styled-components/native';

interface ICreateTaskPanelProps {}

const CreateTaskPanel = (props: ICreateTaskPanelProps) => {
  return (
    <Container>
      <Text>Hello World</Text>
    </Container>
  );
};

export default CreateTaskPanel;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text``;
