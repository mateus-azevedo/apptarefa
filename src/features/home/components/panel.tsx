import React from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';

const produtos = [
  {
    id: '001',
    desc: ['Mouse', '25.00'],
  },
  {
    id: '002',
    desc: ['Teclado', '50.00'],
  },
  {
    id: '003',
    desc: ['Monitor', '430.00'],
  },
];

const HomePanel = () => {
  return (
    <View style={styles.container}>
      <Text>HomePanel Conquistado</Text>
      <FlatList
        data={produtos}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Text>
            Descrição: {item.desc[0]} - Valor:{item.desc[1]}
          </Text>
        )}
      />
    </View>
  );
};

export default HomePanel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
