import React, {ReactNode} from 'react';
import {StyledCentralize} from './style';

interface ICentralizeProps {
  children: ReactNode;
}

const Centralize = ({children}: ICentralizeProps) => {
  return <StyledCentralize>{children}</StyledCentralize>;
};

export default Centralize;
