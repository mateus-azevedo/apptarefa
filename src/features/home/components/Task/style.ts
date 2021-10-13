import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: #fff;
  border-radius: 10px;

  margin-bottom: 20px;
  padding: 15px;
`;

export const ItemLeft = styled.View`
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
`;

export const Square = styled.TouchableOpacity`
  width: 24px;
  height: 24px;

  background-color: #55bcf6;
  opacity: 0.4;

  border-radius: 5px;
  margin-right: 15px;
`;

export const ItemText = styled.Text`
  max-width: 80%;
`;

export const Circular = styled.View`
  width: 12px;
  height: 12px;

  border-color: #55bcf6;
  border-width: 2px;
  border-radius: 5px;
`;
