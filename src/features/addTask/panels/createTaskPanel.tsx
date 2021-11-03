import React from 'react';
import styled from 'styled-components/native';
import {Formik} from 'formik';

import {BackgroundStyled} from '@architecture/components';
import {FormButton} from '../components';

interface ICreateTaskPanelProps {
  taskTitle: string;
  date?: Date;
  description?: string;
  labels?: Array<string>;
}

const CreateTaskPanel = ({
  taskTitle,
  date,
  description,
  labels,
}: ICreateTaskPanelProps) => {
  const values = {
    taskTitle,
    date,
    description,
    labels,
  };

  return (
    <BackgroundStyled>
      <Container>
        <SectionTitle>Create a new Task</SectionTitle>
        <Formik initialValues={values} onSubmit={values => console.log(values)}>
          {({handleChange, handleBlur, handleSubmit, values}) => (
            <FormContainer>
              <FormContent>
                <FormTitle>Title</FormTitle>
                <FormInput
                  onChangeText={handleChange('taskTitle')}
                  onBlur={handleBlur('taskTitle')}
                  value={values.taskTitle}
                />

                <FormTitle>Description</FormTitle>
                <FormInput
                  onChangeText={handleChange('description')}
                  onBlur={handleBlur('description')}
                  value={values.description}
                />
              </FormContent>

              <FormButton title="New Task" onPress={handleSubmit} />
            </FormContainer>
          )}
        </Formik>
      </Container>
    </BackgroundStyled>
  );
};

export default CreateTaskPanel;

const Container = styled.View`
  padding-top: 20px;
  padding-horizontal: 20px;
`;

const SectionTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

const FormContainer = styled.View`
  height: 90%;
  justify-content: space-between;
`;

const FormContent = styled.ScrollView`
  flex-direction: column;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const FormTitle = styled.Text`
  font-size: 20px;
`;

const FormInput = styled.TextInput`
  height: 40px;
  margin: 12px;
  border-width: 1px;
  padding: 10px;
`;
