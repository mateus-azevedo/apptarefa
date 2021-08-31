import React from 'react';
import {View} from 'react-native';
import {StyledFooter} from './style';

interface IFooterProps {
  children: string;
}

const Footer = ({children}: IFooterProps) => {
  return <StyledFooter>{children}</StyledFooter>;
};

export default Footer;
