import React from 'react';
import {View, Text, Button} from 'react-native';

const Introduction = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Bem-vindo ao aplicativo</Text>
      <Button title="Começar" onPress={() => navigation.navigate('TaskTip')} />
    </View>
  );
};

export default Introduction;
