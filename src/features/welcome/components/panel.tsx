import React from 'react';

import {Centralize, Title, Footer, ExampleImage} from '.';

interface IPanelProps {
  title: string;
  footer: string;
}

const Panel = ({title, footer}: IPanelProps) => {
  return (
    <Centralize>
      <Title>{title}</Title>
      <ExampleImage widthProp={300} heightProp={300} />
      <Footer>{footer}</Footer>
    </Centralize>
  );
};

export default Panel;
