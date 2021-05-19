import React from 'react';
import {SafeAreaView, StatusBar, Text, useColorScheme} from 'react-native';

import {Navigator} from './config';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#000' : '#FFF',
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Navigator />
    </SafeAreaView>
  );
};

export default App;
