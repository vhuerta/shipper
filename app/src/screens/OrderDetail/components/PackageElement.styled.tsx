import styled from '@emotion/native';

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 10px;
  background-color: ${({ theme }) => theme.background.light};
`;

export const NameContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.background.default};
`;

export const Name = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.text.primary};
`;

export const Small = styled.Text`
  font-weight: normal;
  font-size: 14px;
  color: ${({ theme }) => theme.text.default};
`;

export const Empty = styled.Text`
  font-weight: normal;
  font-size: 12px;
  padding: 5px 0;
  color: ${({ theme }) => theme.text.default};
`;

export const Button = styled.TouchableOpacity`
  border-radius: 20px;
  padding: 5px 10px;
  background-color: ${({ theme }) => theme.background.secondary};
`;

export const ButtonText = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.text.default};
`;

export const ButtonRemove = styled.TouchableOpacity`
  width: auto;
  margin-top: 10px;
  margin-right: 10px;
  border-radius: 20px;
  padding: 5px 10px;
  background-color: ${({ theme }) => theme.background.accent};
`;

export const ButtonRemoveText = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: ${({ theme }) => theme.text.default};
`;

export const ActiveText = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: ${({ theme }) => theme.text.primary};
`;

export const ButtonPrimary = styled.TouchableOpacity`
  align-items: center;
  border-radius: 25px;
  padding: 15px 10px;
  background-color: ${({ theme }) => theme.background.primary};
`;

export const ButtonPrimaryText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.text.default};
`;

export const BackButton = styled.TouchableOpacity`
  border-radius: 30px;
`