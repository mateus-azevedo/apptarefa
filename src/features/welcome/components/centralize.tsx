import React, {ReactNode} from 'react';
import {View, StyleSheet} from 'react-native';

interface ICentralizeProps {
  children: ReactNode;
}

const Centralize = ({children}: ICentralizeProps) => {
  return <View style={styles.container}>{children}</View>;
};

export default Centralize;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
