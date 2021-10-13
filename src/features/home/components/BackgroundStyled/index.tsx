import React, {ReactNode} from 'react';
import {Container} from './style';

interface IBackgroundStyledProps {
  children: ReactNode;
}

const BackgroundStyled = ({children}: IBackgroundStyledProps) => {
  return <Container>{children}</Container>;
};

export default BackgroundStyled;
