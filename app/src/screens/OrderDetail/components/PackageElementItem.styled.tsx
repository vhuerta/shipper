import styled from '@emotion/native';

export const Container = styled.View`
  flex: 1;
  padding: 10px;
  border-radius: 5px;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.background.light};
`;

export const QuantityContainer = styled.View`
  width: 25px;
  height: 25px;
  border-radius: 3px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.background.default};
  margin-right: 5px;
`;

export const QuantityText = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: ${({ theme }) => theme.text.secondary};
`;

export const DescriptionContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

export const Description = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: ${({ theme }) => theme.text.default};
  text-transform: capitalize;
`;

export const Small = styled.Text`
  font-weight: normal;
  font-size: 12px;
  color: ${({ theme }) => theme.text.default};
`;

export const Button = styled.TouchableOpacity`
  
`