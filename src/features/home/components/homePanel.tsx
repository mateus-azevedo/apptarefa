import React, {useState} from 'react';
import {Platform} from 'react-native';
import styled from 'styled-components/native';
import {Task} from '.';

const HomePanel = () => {
  const [task, setTask] = useState('');
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    setTaskItems([...taskItems, task]);
    setTask(null);
  };

  return (
    <Container>
      <TasksWrapper>
        <SectionTitle>Today's tasks</SectionTitle>

        <Items>
          {/* This is where the tasks will go */}
          <Task text="Task 1" />
          <Task text="Task 2" />
        </Items>
      </TasksWrapper>

      <WriteTaskWrapper behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <Input
          placeholder={'Write Task'}
          value={task}
          onChangeText={text => setTask(text)}
        />

        <ButtonAddContainer onPress={() => handleAddTask()}>
          <ButtonAddWrapper>
            <ButtonAddText>+</ButtonAddText>
          </ButtonAddWrapper>
        </ButtonAddContainer>
      </WriteTaskWrapper>
    </Container>
  );
};

export default HomePanel;

const Container = styled.View`
  flex: 1;
  background-color: #e8eaed;
`;

const TasksWrapper = styled.View`
  padding-top: 20px;
  padding-horizontal: 20px;
`;

const SectionTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

const Items = styled.View`
  margin-top: 30px;
`;

const WriteTaskWrapper = styled.KeyboardAvoidingView`
  position: absolute;
  bottom: 30px;

  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  width: 100%;
`;

const Input = styled.TextInput`
  padding-vertical: 15px;
  padding-horizontal: 15px;

  background-color: #fff;

  border-radius: 60px;
  border-color: #c0c0c0;
  border-width: 1px;

  width: 250px;
`;

const ButtonAddContainer = styled.TouchableOpacity``;

const ButtonAddWrapper = styled.View`
  width: 60px;
  height: 60px;

  justify-content: center;
  align-items: center;

  background-color: #fff;

  border-radius: 60px;
  border-color: #c0c0c0;
  border-width: 1px;
`;

const ButtonAddText = styled.Text``;
