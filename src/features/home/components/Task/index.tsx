import React from 'react';
import {View, Text} from './style';

interface ITaskProps {
  text: string;
}

const Task = ({text}: ITaskProps) => {
  return (
    <View>
      <Text>{text}</Text>
    </View>
  );
};

export default Task;
// const Item = ({item, onPress, backgroundColor, textColor}) => (
//   <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
//     <Text style={[styles.title, textColor]}>{item.title}</Text>
//   </TouchableOpacity>
// );

// const renderItem = ({item}) => {
//   const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
//   const color = item.id === selectedId ? 'white' : 'black';

//   return (
//     <Item
//       item={item}
//       onPress={() => setSelectedId(item.id)}
//       backgroundColor={{backgroundColor}}
//       textColor={{color}}
//     />
//   );
// };
