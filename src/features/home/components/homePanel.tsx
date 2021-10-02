import React from 'react';
import styled from 'styled-components/native';
import {Task} from '.';

const HomePanel = () => {
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

const Items = styled.View``;
