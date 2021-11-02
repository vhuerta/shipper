import styled from '@emotion/native';

export const Container = styled.TouchableOpacity`
  padding: 20px 20px;
  border-radius: 10px;
  margin-bottom: 10px;
  background-color: ${({ theme, disabled }) => theme.background.light};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const DescriptionContainer = styled.View`
  flex: 1;
`;

export const QuantityContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const LocationContainer = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  background-color: ${({ theme }) => theme.background.secondary};
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

export const Location = styled.Text`
  text-transform: capitalize;
  color: ${({ theme }) => theme.text.default};
  font-size: 18px;
`;

export const Name = styled.Text`
  text-transform: capitalize;
  font-weight: bold;
  color: ${({ theme }) => theme.text.default};
  font-size: 18px;
`;

export const Sku = styled.Text`
  color: ${({ theme }) => theme.text.default};
  font-size: 14px;
`;

export const Quantity = styled.Text`
  color: ${({ theme }) => theme.text.primary};
  font-weight: bold;
  font-size: 20px;
`;

export const Stock = styled.Text`
  color: ${({ theme }) => theme.text.primary};
  font-size: 10px;
`;
