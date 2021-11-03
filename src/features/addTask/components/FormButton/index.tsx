import React from 'react';
import {Container, ButtonText} from './styles';

interface IFormButtonProps {
  title: string;
  onPress: () => void;
}

const FormButton = ({title, onPress}: IFormButtonProps) => {
  return (
    <Container onPress={onPress}>
      <ButtonText>{title}</ButtonText>
    </Container>
  );
};

export default FormButton;
