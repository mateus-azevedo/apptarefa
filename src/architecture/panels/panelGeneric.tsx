import React from 'react';
import styled from 'styled-components/native';

interface IPanelGenericProps {}

const PanelGeneric = (props: IPanelGenericProps) => {
  return (
    <Container>
      <Text>Hello World</Text>
    </Container>
  );
};

export default PanelGeneric;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text``;
