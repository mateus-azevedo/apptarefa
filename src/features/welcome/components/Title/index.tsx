import React from 'react';
import {StyledText} from './style';

interface ITitleProps {
  children: string;
}

const Title = ({children}: ITitleProps) => {
  return <StyledText>{children}</StyledText>;
};

export default Title;
