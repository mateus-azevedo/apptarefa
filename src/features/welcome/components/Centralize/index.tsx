import React, {ReactNode} from 'react';
import {StyledView} from './style';

interface ICentralizeProps {
  children: ReactNode;
}

const Centralize = ({children}: ICentralizeProps) => {
  return <StyledView>{children}</StyledView>;
};

export default Centralize;
