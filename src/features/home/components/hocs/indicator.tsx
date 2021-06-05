import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';

interface IndicatorProps {
  isDoing: boolean;
  errorMessage?: string;
}

const Indicator = (props: IndicatorProps) => {
  const {isDoing, errorMessage} = props;

  return isDoing ? (
    <ActivityIndicator size="large" color="#999999" />
  ) : (
    <View style={styles.errorContainer}>
      <Text style={styles.errorMessage}>{errorMessage}</Text>
    </View>
  );
};

export default Indicator;

const styles = StyleSheet.create({
  errorContainer: {
    alignItems: 'center',
  },
  errorMessage: {
    color: 'red',
  },
});
